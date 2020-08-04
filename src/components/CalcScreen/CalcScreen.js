import React from 'react';
import './CalcScreen.css';

const CalcScreen = ({ result }) => {
    return (
        <div>
            <input 
                className="calcScreen"
                type="text"
                value={result}
                disabled={true}
            />
        </div>
    )
}

export default CalcScreen;