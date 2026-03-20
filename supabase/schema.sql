create table iglesias (
  id uuid primary key default gen_random_uuid(),
  nombre text,
  ubicacion text,
  created_at timestamp default now()
);

create table ofrendas (
  id uuid primary key default gen_random_uuid(),
  iglesia_id uuid references iglesias(id),
  monto numeric,
  fecha date,
  created_at timestamp default now()
);

create table recibos (
  id uuid primary key default gen_random_uuid(),
  numero integer,
  iglesia_id uuid,
  ofrenda_id uuid,
  fecha date,
  created_at timestamp default now()
);
