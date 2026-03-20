# Sistema de Recibos IDN Guatemala

Sistema web base para la **Iglesia del Nazareno Guatemala** con enfoque en:

- registro de iglesias
- registro de ofrendas
- generación automática de recibos
- número de recibo consecutivo
- búsqueda por iglesia y fecha
- reporte mensual de ofrendas
- integración preparada para Supabase
- despliegue preparado para Vercel

## Stack propuesto

- **Next.js 15** con App Router
- **TypeScript**
- **CSS simple** sin dependencias pesadas
- **Supabase** como base de datos
- **Vercel** para despliegue

## Estructura

```bash
app/
  iglesias/
  ofrendas/
  recibos/[id]/
  reportes/
components/admin/
lib/
supabase/
```

## Requisitos

- Node.js 20 o superior
- npm
- cuenta de Supabase
- cuenta de Vercel

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Copia variables de entorno:

```bash
cp .env.example .env.local
```

4. Completa las variables de Supabase en `.env.local`.

5. Ejecuta en desarrollo:

```bash
npm run dev
```

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Base de datos

Dentro de `supabase/schema.sql` se deja el esquema inicial con tablas para:

- iglesias
- ofrendas
- recibos
- perfiles de usuario

## Funcionalidades base incluidas

- panel administrativo simple
- navegación por módulos
- formularios base para iglesias y ofrendas
- cálculo de número consecutivo de recibo
- vista de reporte mensual
- vista imprimible de recibo
- utilidades listas para conectar con Supabase

## Despliegue en Vercel

1. Importa este repositorio en Vercel.
2. Configura las variables de entorno.
3. Despliega.

## Notas

Esta es una **estructura inicial funcional** para que luego se conecte la persistencia real con Supabase y se amplíen validaciones, autenticación y reportes.
