import React from 'react';
import LigaLeds from './components/leds';
import Musicas from './components/musicas';
import Coreografia from './components/coreografia';
import Controle from './components/controle';
import Giroscopio from './components/giroscopio';
import Logo from './logo.png';

function App() {
  const ledsComponents = [...Array(8).keys()].map((led) => (
    <LigaLeds key={led} leds={led} />
  ));

  return (
    <div className='App'>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      <img src={Logo} alt='logo' />
      <h1 className='bg-black'>Site oficial 10 Dimensões</h1>
      <div className='container'>
        {ledsComponents}
      </div>
      <div>
        <Controle /> 
      </div>
      <Musicas />
      <div>
        <Coreografia /> 
        <Giroscopio /> 
      </div>
    </div>
  );
}

export default App;
