'use client';

import React from 'react';
import ProntuarioList from './ProntuarioList';
import './globals.css';
import jsonData from './data/data_resumida.json';

export default function App() {
  return (
    <div className="App">
      <h1>Lista de Prontuários</h1>
      <ProntuarioList data={jsonData} />
    </div>
  );
}
