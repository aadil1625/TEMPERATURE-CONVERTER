import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);
  const [kelvin, setKelvin] = useState(null);

  // Function to handle temperature conversion
  const convertTemperature = () => {
    const celsiusValue = parseFloat(celsius);

    if (!isNaN(celsiusValue)) {
      // Convert Celsius to Fahrenheit and Kelvin
      setFahrenheit((celsiusValue * 9/5) + 32);
      setKelvin(celsiusValue + 273.15);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div className='back'>
    <div className="converter-container">
      <h2>Temperature Converter</h2>
      <div className="input-section">
        <label>Enter Temperature in Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="e.g., 25"
        />
        <button onClick={convertTemperature}>Convert</button>
      </div>
      <div className="output-section">
        {fahrenheit !== null && (
          <p>Temperature in Fahrenheit: <strong>{fahrenheit.toFixed(2)}°F</strong></p>
        )}
        {kelvin !== null && (
          <p>Temperature in Kelvin: <strong>{kelvin.toFixed(2)}K</strong></p>
        )}
      </div>
    </div>
    </div>
  );
};

export default App;
