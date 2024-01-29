import { useState, useEffect } from "react";
import TempConverter from "./components/TemperatureConverter";
import { CurrencyConverter } from "./components/CurrencyConverter";

function App() {
  return (
    <div className='flex bg-rose-200 h-screen'>
      <TempConverter className="w-1/2 h-full mr-2" />
      <CurrencyConverter className="w-1/2 h-full ml-2" />
    </div>
  );
}

export default App;
