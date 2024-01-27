import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

function App () {
    const [temp,setTemp] = useState('');
    const [unit,setUnit] = useState('');
    const [result,setResult] = useState('');
  
    const convertTemp = () => {
      const inputTemp = parseFloat(temp);
      let Celcius = 0;
      let Fahrenheit = 0;
      let Kelvin = 0;
      if (unit === 'Celcius') {
        Fahrenheit = ((9/5)*inputTemp)+32;
        Kelvin = inputTemp + 273.15;
      }
      else if (unit === 'Farhenheit') {
        Celcius = ((5/9)*inputTemp)-32;
        Kelvin = ((5/9)*(inputTemp-32))+273.15;
      }
      else if (unit === 'Kelvin') {
        Celcius = inputTemp-273.15;
        Fahrenheit = ((9/5)*(inputTemp-273.15))+32;
      }
    }
  return ( 
    <div className='bg-red-400 flex w-full h-screen items-center justify-center'>
      <div className='flex flex-col backdrop-blur-lg bg-white/30 w-1/2 h-1/3 items-center justify-center'>
        <h1>Temperature Converter</h1>
          <div className="flex bg-[#5789fb] flex-col">
            <h2>From</h2>
            <div className="flex flex-row justify-between">
              <input></input>
              <input></input>
            </div>
          </div>
      </div>

    </div>
    
  )
}

export default App;
