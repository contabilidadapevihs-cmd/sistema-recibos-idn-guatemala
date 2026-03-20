'use client';

import { useState } from 'react';
import { crearReciboAutomatico } from '@/lib/reciboService';

export default function OfrendasPage() {
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [recibidoDe, setRecibidoDe] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const recibo = await crearReciboAutomatico({
      iglesia_id: 'demo-id',
      monto: Number(monto),
      fecha,
      recibidoDe
    });

    window.location.href = `/recibos/${recibo.id}`;
  };

  return (
    <div>
      <h1>Registrar Ofrenda</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Monto" value={monto} onChange={e => setMonto(e.target.value)} />
        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
        <input placeholder="Recibido de" value={recibidoDe} onChange={e => setRecibidoDe(e.target.value)} />
        <button type="submit">Guardar y generar recibo</button>
      </form>
    </div>
  );
}
