/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorTemperature from './ColorTemperature';

const TitleHeading = styled.h1`
  font-size: 1.6em;
`;

function App() {
  return (

    <section id="page">
      <TitleHeading className="text-primary">Color Temperature Fun</TitleHeading>
      <ColorTemperature kelvin={6000} />
      <hr />
      <small><a href="https://github.com/smycynek/color-temperature">https://github.com/smycynek/color-temperature</a></small>
    </section>

  );
}

export default App;
