import React from 'react';
import './App.css';
import LigaLeds from './components/ligaLeds';
import Musicas from './components/musicas';
import Coreografia from './components/coreografia';
import Controle from './components/controle';
import Giroscopio from './components/giroscopio';


function App() {
  const ledsComponents = [...Array(8).keys()].map((led) => (
    <LigaLeds key={led} leds={led} />
  ));

return (
  <div className='App'>
    <img src='logo.png' alt='logo' />
    <div className='title'>Site oficial 10 Dimensões</div>
    <div className='container'>
      {ledsComponents}
    </div>
    <div>
    {Controle}
    </div>
    <Musicas />
    <div>
    {Coreografia}
    {Giroscopio}
    </div>
    </div>
);
}

export default App;
