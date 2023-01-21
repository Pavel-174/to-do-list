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
      <div className='todolist__input-box'>
        <input placeholder="Task" className='todolist__input' value={todo.name} name="name" onChange={onChangeTask}></input>
        <input placeholder="Description" className='todolist__input' value={todo.description} name="description" onChange={onChangeTask}></input>
      </div>
      <button className='todolist__button' onClick={onClick}>Save</button>
    </li>
  );
}

export default EditToDoListItem;