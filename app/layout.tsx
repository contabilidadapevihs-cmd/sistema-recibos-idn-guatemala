import './globals.css';
import type { ReactNode } from 'react';
import { AdminNav } from '@/components/admin/AdminNav';

export const metadata = {
  title: 'Sistema de Recibos IDN Guatemala',
  description: 'Sistema web para control de iglesias, ofrendas y recibos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <h2>IDN Guatemala</h2>
            <p>Sistema de Recibos</p>
            <AdminNav />
          </aside>
          <section className="content">{children}</section>
        </div>
      </body>
    </html>
  );
}
