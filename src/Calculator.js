import React, { useState } from 'react';
import { add } from './StringCalculator';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      // Replace '\\n' with actual newline character
      const processedInput = input.replace(/\\n/g, '\n');
      const sum = add(processedInput);
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
          placeholder="Enter numbers (e.g., 1,2\n3)"
          className="calculator-input"
        />
        <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      </div>
      {result !== null && <p className="result">Result: {result}</p>}
      {error && <p className="error">{error}</p>}
      <p className="info">You can use commas or \n to separate numbers.</p>
    </div>
  );
}

export default Calculator;
