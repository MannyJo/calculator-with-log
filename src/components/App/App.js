import React, { useState } from 'react';
import './App.css';

function App() {
  const [ result, setResult ] = useState('');

  const btnClick = button => () => {
    if(button === 'C') {
      setResult('');
    } else if(button === '=') {
      let expression;
      let value;

      try {
        value = eval(result);
        expression = result + ' = ' + value;
        setResult(value);
      } catch (error) {
        console.error(error);
      }

      console.log(expression);
    } else {
      setResult('' + result + button);
    }
  }

  return (
    <div className="calcContainer">
      <h1 className="title">Calculator</h1>
      <div>
        <input 
          className="calcScreen"
          type="text"
          value={result}
          disabled={true}
        />
      </div>
      <div className="keypad">
        <button onClick={btnClick('C')}>C</button>
        <button onClick={btnClick('(')}>(</button>
        <button onClick={btnClick(')')}>)</button>
        <button onClick={btnClick('/')}>/</button>

        <button onClick={btnClick('7')}>7</button>
        <button onClick={btnClick('8')}>8</button>
        <button onClick={btnClick('9')}>9</button>
        <button onClick={btnClick('*')}>*</button>

        <button onClick={btnClick('4')}>4</button>
        <button onClick={btnClick('5')}>5</button>
        <button onClick={btnClick('6')}>6</button>
        <button onClick={btnClick('-')}>-</button>

        <button onClick={btnClick('1')}>1</button>
        <button onClick={btnClick('2')}>2</button>
        <button onClick={btnClick('3')}>3</button>
        <button onClick={btnClick('+')}>+</button>

        <button onClick={btnClick('')}>N/A</button>
        <button onClick={btnClick('0')}>0</button>
        <button onClick={btnClick('.')}>.</button>
        <button onClick={btnClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
