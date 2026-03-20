'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function IglesiasPage() {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from('iglesias').insert([
      { nombre, ubicacion }
    ]);

    if (error) {
      alert('Error al guardar');
      console.error(error);
      return;
    }

    alert('Iglesia guardada correctamente');
    setNombre('');
    setUbicacion('');
  };

  return (
    <div>
      <h1>Registro de Iglesias</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre de la iglesia"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
