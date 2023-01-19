import React, { useState } from 'react';
import type { Task } from '../../App';
import './Panel.css'

const DEFAULT__TODO = {name: '', description: ''}

interface PanelProps {
  addTask: ({ name, description }: Omit<Task, 'id' | 'checked'>) => void
}

const Panel: React.FC<PanelProps> = ({addTask}) => {

  const [todo, setTodo] = useState(DEFAULT__TODO);

  function onClick () {
    addTask(todo);
    setTodo(DEFAULT__TODO);
  }

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setTodo({...todo, [name]: value});
  }

  return (
    <div className='panel'>
      <input placeholder="Task" className='panel__input' value={todo.name} name="name" onChange={onChange}></input>
      <input placeholder="Description" className='panel__input' value={todo.description} name="description" onChange={onChange}></input>
      <button className='panel__button' onClick={onClick}>ADD</button>
    </div>
  );
}

export default Panel;