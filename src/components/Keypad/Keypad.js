import React from 'react';
import './Keypad.css';

const Keypad = ({ btnClick }) => {
    return (
        <div className="keypad">
            <button onClick={btnClick('C')} className="keyColorWhite">C</button>
            <button onClick={btnClick('(')} className="keyColorWhite">(</button>
            <button onClick={btnClick(')')} className="keyColorWhite">)</button>
            <button onClick={btnClick('/')} className="keyColorYellow">/</button>

            <button onClick={btnClick('7')} className="keyColorDark keyFontWhite">7</button>
            <button onClick={btnClick('8')} className="keyColorDark keyFontWhite">8</button>
            <button onClick={btnClick('9')} className="keyColorDark keyFontWhite">9</button>
            <button onClick={btnClick('*')} className="keyColorYellow">*</button>

            <button onClick={btnClick('4')} className="keyColorDark keyFontWhite">4</button>
            <button onClick={btnClick('5')} className="keyColorDark keyFontWhite">5</button>
            <button onClick={btnClick('6')} className="keyColorDark keyFontWhite">6</button>
            <button onClick={btnClick('-')} className="keyColorYellow">-</button>

            <button onClick={btnClick('1')} className="keyColorDark keyFontWhite">1</button>
            <button onClick={btnClick('2')} className="keyColorDark keyFontWhite">2</button>
            <button onClick={btnClick('3')} className="keyColorDark keyFontWhite">3</button>
            <button onClick={btnClick('+')} className="keyColorYellow">+</button>

            <button onClick={btnClick('0')} className="keyColorDark keyFontWhite col-2">0</button>
            <button onClick={btnClick('.')} className="keyColorDark keyFontWhite">.</button>
            <button onClick={btnClick('=')} className="keyColorYellow">=</button>
        </div>
    )
}

export default Keypad;