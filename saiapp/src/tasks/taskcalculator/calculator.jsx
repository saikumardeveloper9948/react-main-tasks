import React, { useState } from 'react';
import './calculator.css';
import sound from "../taskcalculator/clicksound.mp3"
// import keypress from "./audio/keypress.mp3"
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    playKeySound()
    setInput(input + value);
  };

  const playKeySound = () => {
    const audio = new Audio(sound); // Path to your audio file
    audio.play();
  };

  const evaluateExpression = () => {
    try {
        if(!input){
            setResult('Error')
            return
        }
        // const audio = new Audio(''); // path to the sound file in the public folder
        // audio.play();
      setResult(eval(input));  
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };
  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  // Function to handle deleting the last character
  const deletelastcharacter=()=>{
    setInput(input.slice(0,-1))
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result !== null ? result : ''}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className='delete' onClick={deletelastcharacter}>C</button>
      

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
       

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
       

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

       
        <button className="clear" onClick={clearInput}>AC</button>
        <button className='equal' onClick={evaluateExpression}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
