import React from 'react';
import logo from './logo.svg';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
