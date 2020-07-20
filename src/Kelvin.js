/* eslint-disable no-nested-ternary */

/* adapted from
Tanner Helland
https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html
and
Mike Sutton
https://gist.github.com/EDais/1ba1be0fe04eca66bbd588a6c9cbd666

*/
const clamp = (num, min, max) => (num < min ? min : num > max ? max : num);

/** Given a temperature (in Kelvin), estimate an RGB equivalent
 * @param {number} tmpKelvin - Temperature (in Kelvin) between 1000 and 40000
 * @returns {{r:number, g:number, b:number}} - RGB channel intensities (0-255)
 * @description Ported from: http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/
*/

const getRGBFromTemperature = (kelvin) => {
  // All calculations require tmpKelvin \ 100, so only do the conversion once
  const tmpKelvin = clamp(kelvin, 1000, 40000) / 100;

  // Note: The R-squared values for each approximation follow each calculation
  return {
    r: Math.floor(tmpKelvin <= 66 ? 255
      : clamp(329.698727446 * (tmpKelvin - 60) ** -0.1332047592, 0, 255)), // .988

    g: Math.floor(tmpKelvin <= 66
      ? clamp(99.4708025861 * Math.log(tmpKelvin) - 161.1195681661, 0, 255) // .996
      : clamp(288.1221695283 * (tmpKelvin - 60) ** -0.0755148492, 0, 255)), // .987

    b: Math.floor(tmpKelvin >= 66 ? 255
      : tmpKelvin <= 19 ? 0
        : clamp(138.5177312231 * Math.log(tmpKelvin - 10) - 305.0447927307, 0, 255)), // .998
  };
};

export default getRGBFromTemperature;
