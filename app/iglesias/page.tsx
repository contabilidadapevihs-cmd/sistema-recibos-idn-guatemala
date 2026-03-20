'use client';

import { useState } from 'react';

export default function IglesiasPage() {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ nombre, ubicacion });
    alert('Iglesia registrada (simulación)');
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
