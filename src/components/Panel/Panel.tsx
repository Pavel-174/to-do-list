import React, { useState } from 'react';
import './Panel.css'

function Panel() {
  
  const DEFAULT__TODO = {task: '', description: ''}
  const [todo, setTodo] = useState(DEFAULT__TODO);

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setTodo({...todo, [name]: value});
  }

  function onClick () {
    console.log('@', todo)
    setTodo(DEFAULT__TODO);
  }

  return (
    <div className='panel'>
      <input placeholder="Task" className='panel__input' value={todo.task} name="task" onChange={onChange}></input>
      <input placeholder="Description" className='panel__input' value={todo.description} name="description" onChange={onChange}></input>
      <button className='panel__button' onClick={onClick}>ADD</button>
    </div>
  );
}

export default Panel;