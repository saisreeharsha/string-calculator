import React, { useState } from 'react';
import { add } from './StringCalculator';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
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
          placeholder="Enter numbers"
          className="calculator-input"
          aria-label="Enter numbers"
        />
        <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      </div>
      <div className="info-lines">
        <p>Examples:</p>
        <ul>
          <li>Basic: 1,2,3</li>
          <li>With newline: 1\n2,3</li>
          <li>Custom delimiter: //;\n1;2;3</li>
        </ul>
      </div>
      {result !== null && <p className="result" aria-live="polite">Result: {result}</p>}
      {error && <p className="error" aria-live="assertive">{error}</p>}
    </div>
  );
}

export default Calculator;
