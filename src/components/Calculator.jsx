
  
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={handleCalculation}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Calculator;
