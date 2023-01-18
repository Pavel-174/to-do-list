import React, { useState } from 'react';
import './Panel.css'

function Panel() {
  const [inputValue, setInputValue] = useState('');

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setInputValue(value);
  }

  function onClick () {
    console.log('@', inputValue)
    setInputValue('');
  }

  return (
    <div className='panel'>
      <input placeholder="Task" className='panel__input' value={inputValue} onChange={onChange}></input>
      <button className='panel__button' onClick={onClick}>ADD</button>
    </div>
  );
}

export default Panel;