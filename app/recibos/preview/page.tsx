'use client';

import { ReciboPlantilla } from '@/components/recibos/ReciboPlantilla';

export default function PreviewRecibo() {
  const data = {
    numero: '000001',
    monto: 318,
    fecha: '9 de enero de 2026',
    lugar: 'Quetzaltenango',
    recibidoDe: 'IDN Armenia Sin Martin Zapotitlán',
    cantidadLetras: 'Trescientos dieciocho quetzales exactos',
    mes: 'Enero',
    conceptos: {
      oracionAyuno: 144,
      mni10: 174
    }
  };

  return (
    <div>
      <ReciboPlantilla data={data} />
      <button onClick={() => window.print()}>Imprimir</button>
    </div>
  );
}
