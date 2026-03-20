'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { ReciboPlantilla } from '@/components/recibos/ReciboPlantilla';

export default function ReciboPage({ params }: any) {
  const [recibo, setRecibo] = useState<any>(null);

  useEffect(() => {
    fetchRecibo();
  }, []);

  const fetchRecibo = async () => {
    const { data } = await supabase.from('recibos').select('*').eq('id', params.id).single();
    setRecibo(data);
  };

  if (!recibo) return <p>Cargando...</p>;

  return (
    <div>
      <ReciboPlantilla
        data={{
          numero: recibo.numero.toString().padStart(6,'0'),
          monto: recibo.monto,
          fecha: recibo.fecha,
          lugar: 'Quetzaltenango',
          recibidoDe: recibo.recibido_de,
          cantidadLetras: recibo.cantidad_letras,
          mes: 'Enero',
          conceptos: {}
        }}
      />

      <button onClick={() => window.print()}>Imprimir</button>
    </div>
  );
}
