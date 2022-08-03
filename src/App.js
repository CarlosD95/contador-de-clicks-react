import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState (0);

  const manejarClic = () => {
    setNumClicks (numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks (0)
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
     
    </div>
  );
}

export default App;
