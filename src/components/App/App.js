import React, { useState } from 'react';
import Keypad from '../Keypad/Keypad';
import CalcScreen from '../CalcScreen/CalcScreen';
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
      <CalcScreen result={result} />
      <Keypad btnClick={btnClick} />
    </div>
  );
}

export default App;
