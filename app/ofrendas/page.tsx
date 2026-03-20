'use client';

import { useState } from 'react';

export default function OfrendasPage() {
  const [iglesiaId, setIglesiaId] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ iglesiaId, monto, fecha });
    alert('Ofrenda registrada (simulación)');
    setIglesiaId('');
    setMonto('');
    setFecha('');
  };

  return (
    <div>
      <h1>Registro de Ofrendas</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="ID Iglesia"
          value={iglesiaId}
          onChange={(e) => setIglesiaId(e.target.value)}
        />
        <input
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
