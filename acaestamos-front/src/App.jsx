import { useState } from 'react';
import './App.css';
import Loading from './Efectos/Loading';
import Alert from './Efectos/Alert.';
import React from 'react';
import './Efectos/Alert.css';
import EnvioFormulario from './Efectos/EnvioFormulario';
import Header from './componentes/Header/Header';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import DPADP from './Efectos/DPADP';
import FRRF from './Efectos/FRRF';
import PruebaAsync from './Efectos/PruebaAsync';
function App() {

  return (
    <>
      <Header />
      <Navbar />
      <PruebaAsync />
      <Footer />
    </>
  );
}

export default App;
