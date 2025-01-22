import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  let longPressTimeout;

  const handleMouseDown = () => {
    longPressTimeout = setTimeout(() => {
      setInput(''); 
    }, 800);
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimeout);
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {/* Handle short and long press for Del/AC */}
        <button className='grey'
          onClick={() => {
            if (input) {
              setInput(input.slice(0, -1));
            }
          }}
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
        setInput(input.slice(1)); 
      } else {
        setInput('-' + input);
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

