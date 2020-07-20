/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import React, { useState } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import getRGBFromTemperature from './Kelvin';
import './App.css';

const Swatch = styled.div`
  display: block;
  border-radius: 1px;
  padding: 0;
  margin: 0;
  width: 14rem;
  height: 5rem;
  background: ${(props) => props.background};
  border: 1px solid black;
`;
const SwatchContainer = styled.div`
  grid-area: swatch;
  margin: 1px;
  
`;
const CodeContainer = styled.div`
  grid-area: code;
  margin: 1px;
`;
const RedContainer = styled.div`
  grid-area: control_red;
  margin: 1px;

`;
const GreenContainer = styled.div`
  grid-area: control_green;
  margin: 1px;

`;
const BlueContainer = styled.div`
  grid-area: control_blue;
  margin: 1px;

`;

const TemperatureContainer = styled.div`
  grid-area: control_temperature;
  margin: 1px;

`;

const LabelRedContainer = styled.div`
  grid-area: label_control_red;
  margin: 1px;

  font-family: "Lucida Console", Monaco, monospace;
`;

const LabelGreenContainer = styled.div`
  grid-area: label_control_green;
  margin: 1px;

  font-family: "Lucida Console", Monaco, monospace;
`;
const LabelBlueContainer = styled.div`
  grid-area: label_control_blue;
  margin: 1px;

  font-family: "Lucida Console", Monaco, monospace;
`;

const LabelTemperatureContainer = styled.div`
  grid-area: label_control_temperature;
  margin: 1px;

  font-family: "Lucida Console", Monaco, monospace;
`;

const getKelvinDescription = (temperature) => {
  if (temperature < 2000) return 'candlelight';
  if (temperature < 3400) return 'tungsten light bulb';
  if (temperature < 5000) return 'flourescent tube';
  if (temperature < 5500) return 'camera flash';
  if (temperature < 7000) return 'sunny day';
  if (temperature < 8500) return 'cloudy day';
  return 'clear blue sky';
};

const ColorTemperature = ({ kelvin }) => {
  const rgb = getRGBFromTemperature(kelvin);
  const [red, setRed] = useState(rgb.r);
  const [green, setGreen] = useState(rgb.g);
  const [blue, setBlue] = useState(rgb.b);
  const [temperature, setTemperature] = useState(kelvin);

  const getKelvingDescriptionLocal = () => getKelvinDescription(temperature);
  const setRGB = (rgbVals) => {
    setRed(Math.floor(rgbVals.r));
    setBlue(Math.floor(rgbVals.b));
    setGreen(Math.floor(rgbVals.g));
  };

  const handleTemperature = (e) => {
    const val = e.target.value;
    setTemperature(Number(val));
    setRGB(getRGBFromTemperature(val));
  };

  const buildColorRGB = () => {
    function pad(num, size) {
      let s = `${num}`;
      while (s.length < size) s = `0${s}`;
      return s;
    }
    return `(${pad(red, 3)},${pad(green, 3)},${pad(blue, 3)})`;
  };
  const buildColor = () => {
    const redn = Number(red);
    let redc = redn.toString(16);
    if (redn < 16) {
      redc = `0${redc}`;
    }

    const bluen = Number(blue);
    let bluec = bluen.toString(16);
    if (bluen < 16) {
      bluec = `0${bluec}`;
    }

    const greenn = Number(green);
    let greenc = greenn.toString(16);
    if (greenn < 16) {
      greenc = `0${greenc}`;
    }

    return `#${redc}${greenc}${bluec}`;
  };
  return (
    <div id="ct">
      <SwatchContainer>
        <Swatch background={buildColor()} />
      </SwatchContainer>
      <CodeContainer>
        <span className="code">
          {buildColor()}
          {' '}
          {buildColorRGB()}
        </span>
        <br />
        <span className="code">
          {temperature.toLocaleString('en-US')}
          K
        </span>
        <br />
        <span className="code">{getKelvingDescriptionLocal()}</span>
      </CodeContainer>

      <LabelRedContainer>
        <label htmlFor="red">Red</label>
      </LabelRedContainer>
      <RedContainer>
        <input id="red" name="red" disabled readOnly className="form-input" value={red} type="range" min={0} max={255} />
      </RedContainer>

      <LabelGreenContainer>
        <label htmlFor="green">Green</label>
      </LabelGreenContainer>
      <GreenContainer>
        <input id="green" className="form-input" disabled readOnly value={green} type="range" min={0} max={255} />
      </GreenContainer>

      <LabelBlueContainer>
        <label htmlFor="blue">Blue</label>
      </LabelBlueContainer>
      <BlueContainer>
        <input id="blue" className="form-input" disabled readOnly value={blue} type="range" min={0} max={255} />
      </BlueContainer>

      <LabelTemperatureContainer>
        <label htmlFor="temperature">Kelvin</label>
      </LabelTemperatureContainer>

      <TemperatureContainer>
        <input id="temperature" className="form-input" onChange={handleTemperature} value={temperature} type="range" min={1000} max={20000} />
      </TemperatureContainer>

    </div>

  );
};

ColorTemperature.defaultProps = {
  kelvin: 6000,
};

ColorTemperature.propTypes = {
  kelvin: PropTypes.number,
};

export default ColorTemperature;
