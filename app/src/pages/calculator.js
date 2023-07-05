import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          className="input"
          placeholder="0"
          value={input}
          onChange={handleInputChange}
        />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">/</button>
        </div>
        <div className="row">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">*</button>
        </div>
        <div className="row">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">-</button>
        </div>
        <div className="row">
          <button className="button">0</button>
          <button className="button">.</button>
          <button className="button" onClick={calculateResult}>=</button>
          <button className="button">+</button>
        </div>
        <div className="row">
          <button className="button clear" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

