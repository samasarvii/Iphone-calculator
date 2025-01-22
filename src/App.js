import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  let longPressTimeout;

  const handleMouseDown = () => {
    longPressTimeout = setTimeout(() => {
      setInput(''); // Clear all input on long press
    }, 800); // Adjust the time (800ms) for the long press duration
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimeout); // Cancel the long press if mouse is released
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {/* Handle short and long press for Del/AC */}
        <button className='grey'
          onClick={() => {
            if (input) {
              setInput(input.slice(0, -1)); // Short press: Delete last character
            }
          }}
          onMouseDown={handleMouseDown} // Start long press
          onMouseUp={handleMouseUp} // Cancel long press on release
          onMouseLeave={handleMouseUp} // Cancel long press if mouse leaves button
        >
          {input ? 'Del' : 'AC'}
        </button>
        <button className='grey' onClick={() => toggleSign()}>±</button>
        <button className='grey' onClick={() => setInput(input + '%')}>%</button>
        <button className='orange' onClick={() => setInput(input + '/')}>÷</button>
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button className='orange' onClick={() => setInput(input + '*')}>×</button>
        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <button className='orange' onClick={() => setInput(input + '-')}>−</button>
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button>
        <button onClick={() => setInput(input + '3')}>3</button>
        <button className='orange' onClick={() => setInput(input + '+')}>+</button>
        <button className='zero' onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => setInput(input + '.')}>.</button>
        <button className='orange' onClick={() => calculate()}>=</button>
      </div>
    </div>
  );

  function toggleSign() {
    if (input) {
      if (input.startsWith('-')) {
        setInput(input.slice(1)); // Remove the '-' to make it positive
      } else {
        setInput('-' + input); // Add '-' to make it negative
      }
    }
  }

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  }
}

export default App;

