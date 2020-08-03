import React from 'react';

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