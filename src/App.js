/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorTemperature from './ColorTemperature';

function App() {
  return (

    <section id="page">
      <h1>Color Temperature Fun</h1>
      <ColorTemperature kelvin={6000} />

    </section>

  );
}

export default App;
