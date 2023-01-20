import React, { useState } from 'react';
import type { Task } from '../../App';
import "../ToDoList/ToDoList.css"
import "../ToDoList/ToDoList.css"

interface EditToDoListItemProps {
  task: Task;
    changeTask: ({ name, description }: Omit<Task, 'id' | 'checked'>) => void;
}

const EditToDoListItem: React.FC<EditToDoListItemProps> = ({task, changeTask}) => {

  const [todo, setTodo] = useState({name: task.name, description: task.description});

  function onClick () {
    changeTask(todo);
  };

  function onChangeTask (e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setTodo({...todo, [name]: value});
  };

  return (
    <li className="todolist__item" key={task.id}>
      <input placeholder="Task" className='panel__input' value={todo.name} name="name" onChange={onChangeTask}></input>
      <input placeholder="Description" className='panel__input' value={todo.description} name="description" onChange={onChangeTask}></input>
      <button className='panel__button' onClick={onClick}>ADD</button>
    </li>
  );
}

export default EditToDoListItem;