-- Reto de Microbiología: base de datos en Supabase.
-- Pegar completo en Supabase > SQL Editor > New query > Run.
-- Se puede volver a ejecutar sin romper nada.

-- 1. Perfil público de cada alumno (solo el apodo que se muestra en el ranking).
create table if not exists public.perfiles (
  id uuid primary key references auth.users (id) on delete cascade,
  apodo text not null check (char_length(apodo) between 2 and 30),
  creado timestamptz not null default now()
);

-- 2. Avance de cada alumno. Solo el dueño puede leerlo o cambiarlo.
create table if not exists public.progreso (
  user_id uuid primary key references auth.users (id) on delete cascade,
  estado jsonb not null default '{}'::jsonb,
  puntos integer not null default 0 check (puntos >= 0),
  dominadas integer not null default 0 check (dominadas >= 0),
  actualizado timestamptz not null default now()
);

alter table public.perfiles enable row level security;
alter table public.progreso enable row level security;

-- Reglas de acceso (RLS).
drop policy if exists "perfiles: leer el propio" on public.perfiles;
drop policy if exists "perfiles: crear el propio" on public.perfiles;
drop policy if exists "perfiles: editar el propio" on public.perfiles;
create policy "perfiles: leer el propio" on public.perfiles
  for select to authenticated using (auth.uid() = id);
create policy "perfiles: crear el propio" on public.perfiles
  for insert to authenticated with check (auth.uid() = id);
create policy "perfiles: editar el propio" on public.perfiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "progreso: leer el propio" on public.progreso;
drop policy if exists "progreso: crear el propio" on public.progreso;
drop policy if exists "progreso: editar el propio" on public.progreso;
create policy "progreso: leer el propio" on public.progreso
  for select to authenticated using (auth.uid() = user_id);
create policy "progreso: crear el propio" on public.progreso
  for insert to authenticated with check (auth.uid() = user_id);
create policy "progreso: editar el propio" on public.progreso
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 3. Al registrarse, se crea el perfil con el apodo elegido
--    (o el nombre de Google, o la parte del correo antes de la @).
create or replace function public.nuevo_usuario()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  nombre text;
begin
  nombre := coalesce(
    nullif(trim(new.raw_user_meta_data ->> 'apodo'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'name'), ''),
    split_part(new.email, '@', 1)
  );
  nombre := left(nombre, 30);
  if char_length(nombre) < 2 then
    nombre := 'Alumno';
  end if;
  insert into public.perfiles (id, apodo) values (new.id, nombre)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists al_registrarse on auth.users;
create trigger al_registrarse
  after insert on auth.users
  for each row execute function public.nuevo_usuario();

-- 4. Ranking: muestra solo apodo, puntos y preguntas dominadas, nunca correos ni avance completo.
create or replace function public.ranking(limite integer default 50)
returns table (apodo text, puntos integer, dominadas integer, soy_yo boolean)
language sql
stable
security definer
set search_path = public
as $$
  select p.apodo, g.puntos, g.dominadas, g.user_id = auth.uid()
  from public.progreso g
  join public.perfiles p on p.id = g.user_id
  order by g.puntos desc, g.actualizado asc
  limit least(greatest(limite, 1), 100);
$$;

revoke all on function public.ranking(integer) from public, anon;
grant execute on function public.ranking(integer) to authenticated;

-- 5. Comentarios entre alumnos.
create table if not exists public.comentarios (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  texto text not null check (char_length(trim(texto)) between 1 and 500),
  creado timestamptz not null default now()
);
alter table public.comentarios enable row level security;

drop policy if exists "comentarios: leer" on public.comentarios;
drop policy if exists "comentarios: publicar el propio" on public.comentarios;
drop policy if exists "comentarios: borrar el propio" on public.comentarios;
create policy "comentarios: leer" on public.comentarios
  for select to authenticated using (true);
create policy "comentarios: publicar el propio" on public.comentarios
  for insert to authenticated with check (auth.uid() = user_id);
create policy "comentarios: borrar el propio" on public.comentarios
  for delete to authenticated using (auth.uid() = user_id);

-- Lista de comentarios con el apodo del autor (nunca su correo).
create or replace function public.comentarios_recientes(limite integer default 100)
returns table (id bigint, apodo text, texto text, creado timestamptz, soy_yo boolean)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, coalesce(p.apodo, 'Alumno'), c.texto, c.creado, c.user_id = auth.uid()
  from public.comentarios c
  left join public.perfiles p on p.id = c.user_id
  order by c.creado desc
  limit least(greatest(limite, 1), 200);
$$;

revoke all on function public.comentarios_recientes(integer) from public, anon;
grant execute on function public.comentarios_recientes(integer) to authenticated;
-- Para moderar: Supabase > Table Editor > comentarios, y borrar la fila.
