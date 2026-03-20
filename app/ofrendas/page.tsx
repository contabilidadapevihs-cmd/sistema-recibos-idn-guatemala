'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function OfrendasPage() {
  const [iglesias, setIglesias] = useState<any[]>([]);
  const [iglesiaId, setIglesiaId] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    fetchIglesias();
  }, []);

  const fetchIglesias = async () => {
    const { data } = await supabase.from('iglesias').select('*');
    setIglesias(data || []);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from('ofrendas').insert([
      {
        iglesia_id: iglesiaId,
        monto: Number(monto),
        fecha
      }
    ]);

    if (error) {
      alert('Error al guardar');
      console.error(error);
      return;
    }

    alert('Ofrenda guardada correctamente');
    setIglesiaId('');
    setMonto('');
    setFecha('');
  };

  return (
    <div>
      <h1>Registro de Ofrendas</h1>
      <form onSubmit={handleSubmit}>
        <select value={iglesiaId} onChange={(e) => setIglesiaId(e.target.value)}>
          <option value="">Seleccione iglesia</option>
          {iglesias.map((ig) => (
            <option key={ig.id} value={ig.id}>{ig.nombre}</option>
          ))}
        </select>

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
