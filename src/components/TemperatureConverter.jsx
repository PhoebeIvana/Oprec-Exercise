import { useState, useEffect } from 'react';

function TempConverter() {
  // const that are used to convert the temperature
  const [temp, setTemp] = useState('');
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('C');
  const [result, setResult] = useState('');
  const [calSteps, setCalSteps] = useState('');

  const convertTemp = () => {
    const inputTemp = parseFloat(temp);

    if (isNaN(inputTemp)) {
      setResult('Invalid input');
      setCalSteps('');
      return;
    }

    let convertedTemp;
    let steps;

    if (fromUnit === 'C' && toUnit === 'F') {
      convertedTemp = (inputTemp * 9 / 5) + 32;
      steps = `Convert ${inputTemp} Celsius to Fahrenheit = (${inputTemp} * 9/5) + 32 = ${convertedTemp.toFixed(2)} F`;
    } else if (fromUnit === 'C' && toUnit === 'K') {
      convertedTemp = inputTemp + 273.15;
      steps = `Convert ${inputTemp} Celsius to Kelvin = ${inputTemp} + 273.15 = ${convertedTemp.toFixed(2)} K`;
    } else if (fromUnit === 'C' && toUnit === 'R') {
      convertedTemp = (inputTemp*4)/5;
      steps = `Convert ${inputTemp} Celsius to Reamur = (${inputTemp}*4)/5 = ${convertedTemp.toFixed(2)} R`;
    } else if (fromUnit === 'F' && toUnit === 'C') {
      convertedTemp = (inputTemp - 32) * 5 / 9;
      steps = `Convert ${inputTemp} Fahrenheit to Celcius = (${inputTemp} - 32) * 5/9 = ${convertedTemp.toFixed(2)} C`;
    } else if (fromUnit === 'F' && toUnit === 'K') {
      convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
      steps = `Convert ${inputTemp} Fahrenheit to Kelvin = (${inputTemp} - 32) * 5 / 9 + 273.15 = ${convertedTemp.toFixed(2)} K`;
    } else if (fromUnit === 'F' && toUnit === 'R') {
      convertedTemp = 4/9 * (inputTemp - 32);
      steps = `Convert ${inputTemp} Fahrenheit to Reamur = 4/9 * (${inputTemp} - 32) = ${convertedTemp.toFixed(2)} R`;
    } else if (fromUnit === 'K' && toUnit === 'C') {
      convertedTemp = inputTemp - 273.15;
      steps = `Convert ${inputTemp} Kelvin to Celcius = ${inputTemp} - 273.15  = ${convertedTemp.toFixed(2)} C`;
    } else if (fromUnit === 'K' && toUnit === 'F') {
      convertedTemp = (inputTemp - 273.15) * 9 / 5 + 32;
      steps = `Convert ${inputTemp} Kelvin to Fahrenheit = (${inputTemp} - 273.15) * 9 / 5 + 32 = ${convertedTemp.toFixed(2)} F`;
    } else if (fromUnit === 'K' && toUnit === 'R') {
      convertedTemp = 4/5 * (inputTemp - 273.15);
      steps = `Convert ${inputTemp} Kelvin to Reamur = 4/5 * (${inputTemp} - 273.15) = ${convertedTemp.toFixed(2)} R`;
    } else if (fromUnit === 'R' && toUnit === 'C') {
      convertedTemp = 5/4 * inputTemp;
      steps = `Convert ${inputTemp} Reamur to Celcius = 5/4 * ${inputTemp} = ${convertedTemp.toFixed(2)} C`;
    } else if (fromUnit === 'R' && toUnit === 'K') {
      convertedTemp = (5/4 * inputTemp) + 273.15;
      steps = `Convert ${inputTemp} Reamur to Kelvin = (5/4 * ${inputTemp}) + 273.15 = ${convertedTemp.toFixed(2)} K`;
    } else if (fromUnit === 'R' && toUnit === 'F') {
      convertedTemp = (9/4 * inputTemp) + 32;
      steps = `Convert ${inputTemp} Reamur to Fahrenheit = (9/4 * ${inputTemp}) + 32 = ${convertedTemp.toFixed(2)} F`;
    }else {
      convertedTemp = inputTemp;
      steps = '-';
    }

    setResult(convertedTemp.toFixed(2)); // Round to 2 decimal places
    setCalSteps(steps);
  };

  const handleConvertClick = () => {
    convertTemp();
  };

  return (
      <div className='flex backdrop-blur-lg bg-white/30 w-1/2 items-center justify-center rounded-3xl flex-col space-y-5 p-4'>
        <h1 className='text-black font-bold text-3xl text-center'>Temperature Converter</h1>
        <div className="flex bg-white rounded-xl flex-col items-center w-full p-4 space-y-7">
          <div className='space-y-5 w-full p-6'>
            <h2 className='font-semibold text-black text-xl'>From</h2>
            <select
              className='w-full text-lg'
              id="fromUnit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="K">Kelvin</option>
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
              <option value="R">Reamur</option>
            </select>
            <div className='w-full h-[2px] bg-slate-300 m-5 rounded-full'></div>
            <h2 className='font-semibold text-black text-xl'>To</h2>
            <select
              className='w-full text-lg'
              id="toUnit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              <option value="K">Kelvin</option>
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
              <option value="R">Reamur</option>
            </select>
            <div className='w-full h-[2px] bg-slate-300 m-5 rounded-full'></div>
            <h2 className='font-semibold text-black text-xl'>Temperature</h2>
            <input
              type="text"
              placeholder='Input Your Temperature'
              className='w-full text-xl'
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
          </div>
          <button
            className='bg-[#4cb050] rounded-lg text-white text-xl w-1/2 p-3'
            onClick={handleConvertClick}
          >
            Convert
          </button>
          <div>
          <p className="text-3xl font-bold justify-center mt-5">Result : {result} </p>
          <p className="text-2xl font-bold justify-normal">Process : {calSteps} </p>
          </div>
        </div>
      </div>
  );
}

export default TempConverter;
