import React from 'react'
import { useState } from 'react';

function Vite() {

  const [nombre, setNombre] = useState('MANUEL');

  function CambioNombre() {
    setNombre('Juancho')
    
  }

  return (
    <div className='App'>
      <h1>{nombre}</h1>
      <button onClick={CambioNombre}>Cambiar nombre</button>
    </div>
  )
}

export default Vite