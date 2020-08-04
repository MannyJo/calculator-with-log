import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { evaluate } from 'mathjs';
import Keypad from '../Keypad/Keypad';
import CalcScreen from '../CalcScreen/CalcScreen';
import './App.css';

let socket;

function App() {
  const [ result, setResult ] = useState('0');

  useEffect(() => {
    initSocket();
  });

  const initSocket = () => {
    if(socket === null || socket === undefined) {
      socket = io();
    }
  }

  const btnClick = button => () => {
    if(button === 'C') {
      setResult('0');
    } else if(button === '=') {
      let expression;
      let value;

      try {
        value = evaluate(result);
        expression = result + ' = ' + value;
        setResult(value);

        initSocket();
        socket.emit('expression', expression);
      } catch (error) {
        alert('Wrong expression.');
      }
    } else {
      if(result === '0') {
        setResult('' + button);
      } else {
        setResult('' + result + button);
      }
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
