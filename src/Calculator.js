import React, { useState } from 'react';
import { add } from './StringCalculator';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (e.g., 1,2,3)"
          className="calculator-input"
        />
        <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      </div>
      {result !== null && <p className="result">Result: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Calculator;
