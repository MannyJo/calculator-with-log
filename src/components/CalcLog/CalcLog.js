import React from 'react';
import './CalcLog.css';

const CalcLog = ({ results }) => {
    return (
        <div className="logList">
            <div className="logTitle">Log</div>
            {
                results.map((result, i) => (
                    <div className="logItem" key={i}>{result.expression}</div>
                ))
            }
        </div>
    );
}

export default CalcLog;