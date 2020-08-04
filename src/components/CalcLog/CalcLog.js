import React from 'react';

const CalcLog = ({ results }) => {
    return (
        <div>
            <ul>
                {
                    results.map((result, i) => (
                        <li key={i}>{result.expression}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CalcLog;