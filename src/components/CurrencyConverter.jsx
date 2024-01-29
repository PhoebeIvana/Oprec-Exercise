import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

export const CurrencyConverter = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [inputAmount, setInputAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("jpy");
  const [toCurrency, setToCurrency] = useState("usd");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(0);

useEffect(() => {
  Axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`
  ).then((response) => {
    setCurrencyData(response.data[fromCurrency]);
  });
}, [fromCurrency]);

useEffect(() => {
  if (currencyData && typeof currencyData === "object" && Object.keys(currencyData).length > 0) {
    setCurrencyOptions(Object.keys(currencyData));
    convertAmount();
  }
}, [currencyData]);

  function convertAmount() {
    setConvertedAmount(inputAmount * currencyData[toCurrency]);
  }

  function swapCurrencies() {
    const temporaryCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temporaryCurrency);
  }


  return (
    <div className='flex backdrop-blur-lg bg-white/30 w-1/2 items-center justify-center rounded-3xl flex-col space-y-5 p-4'>
        <h1 className='text-black font-bold text-3xl text-center'>Currency Converter</h1>
        <div className="flex bg-white rounded-xl flex-col items-center w-full p-4 space-y-20">
        <div className='space-y-5 w-full p-6'>
        <h2 className='font-semibold text-black text-xl'>Amount</h2>
          <input
            type="text"
            placeholder="Enter the amount"
            className='w-full text-xl'
            onChange={(event) => setInputAmount(event.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <div className='w-full'>
            <h2 className='font-semibold text-black text-xl'>From</h2>
            <Dropdown
              options={currencyOptions}
              onChange={(selectedOption) => setFromCurrency(selectedOption.value)}
              value={fromCurrency}
              placeholder="From"
            />
          </div>
          <div className='swap-icon flex items-center justify-center'>
            <HiSwitchHorizontal
              size="30px"
              onClick={() => {
                swapCurrencies();
              }}
            />
          </div>
          <div className='w-full'>
            <h2 className='font-semibold text-black text-xl'>To</h2>
            <Dropdown
              options={currencyOptions}
              onChange={(selectedOption) => setToCurrency(selectedOption.value)}
              value={toCurrency}
              placeholder="To"
            />
          </div>
        </div>
        <button
          className='bg-[#4cb050] rounded-lg text-white text-xl w-1/2 p-3 mt-80'
          onClick={() => {
            convertAmount();
          }}
        >
          Convert
        </button>
        <div>
          <p className="text-3xl font-bold justify-center mt-5">
            Result: {convertedAmount.toFixed(2)} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
