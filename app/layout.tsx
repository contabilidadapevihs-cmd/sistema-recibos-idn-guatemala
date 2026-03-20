import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Sistema de Recibos IDN Guatemala',
  description: 'Sistema web para iglesias, ofrendas y recibos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
