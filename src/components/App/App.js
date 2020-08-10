import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { evaluate } from 'mathjs';
import axios from 'axios';
import Keypad from '../Keypad/Keypad';
import CalcScreen from '../CalcScreen/CalcScreen';
import CalcLog from '../CalcLog/CalcLog';
import './App.css';

let socket;
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://calculator-with-log.herokuapp.com' : 'http://localhost:5000';

function App() {
  const [ result, setResult ] = useState('0');
  const [ results, setResults ] = useState([]);
  const [ initiated, isInitiated ] = useState(false);

  useEffect(() => {
    if(!initiated) {
      initSocket();
      initResults();
      isInitiated(true);
    }
  }, [ initiated ]);

  useEffect(() => {
    socket.on('expressions', expressions => {
      setResults(expressions);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ results ]);

  const initSocket = () => {
    if(socket === null || socket === undefined) {
      socket = io(BASE_URL);
    }
  }

  const initResults = () => {
    axios.get(`${BASE_URL}/results`)
    .then(results => {
      setResults(results.data);
    }).catch(err => {
      console.log('Error with getting results from server :', err);
    });
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
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="mainContainer">
        <div className="itemContainer">
          <CalcScreen result={result} />
          <Keypad btnClick={btnClick} />
        </div>
        <div className="itemContainer">
          <CalcLog 
            results={results} 
            BASE_URL={BASE_URL}
            initResults={initResults}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
