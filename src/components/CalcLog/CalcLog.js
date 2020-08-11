import React from 'react';
import axios from 'axios';
import './CalcLog.css';

const CalcLog = ({ results, BASE_URL, initResults, socket }) => {
    const resetLog = () => {
        axios.delete(BASE_URL + '/deleteAll')
        .then(() => {
            initResults();
            socket.emit('get expressions');
        }).catch(err => {
            console.log('Error with deleting expressions :', err);
        });
    }

    return (
        <div className="logList">
            <div className="logResetBtnDiv">
                <button onClick={resetLog}>Reset</button>
            </div>
            <div className="logTitle">
                <span>Log</span>
            </div>
            {
                results.map((result, i) => (
                    <div className="logItem" key={i}>{result.expression}</div>
                ))
            }
        </div>
    );
}

export default CalcLog;