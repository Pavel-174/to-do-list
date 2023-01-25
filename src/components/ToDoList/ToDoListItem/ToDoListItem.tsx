import React from 'react';
import type { Task } from '../../App/App';

interface ToDoListItemProps {
    task: Task;
    deleteTask: (id: Task['id']) => void;
    checkTask: (id: Task['id']) => void;
    editTask: (id: Task['id']) => void;
}

const ToDoListItem:  React.FC<ToDoListItemProps> = ({task, deleteTask, checkTask, editTask}) => {

  return (
    <li className="todolist__item" key={task.id}>
      <div className={`todolist__task ${task.checked ? `todolist__task_checked`: ""}`}>
        <h3 className={`todolist__header ${task.checked ? `todolist__header_checked`: ""}`}>{task.name}</h3>
        <p  className={`todolist__text ${task.checked ? `todolist__text_checked`: ""}`}>{task.description}</p>
      </div>
      <div className='todolist__button-box'>
        <button className={`todolist__button ${task.checked ? `todolist__button_disabled`: "todolist__button_enabled"}`} onClick={() => editTask(task.id)} disabled={task.checked ? true : false}>Edit</button>
        <button className="todolist__button todolist__button_enabled" onClick={() => checkTask(task.id)}>Complete</button>
        <button className="todolist__button todolist__button_enabled" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoListItem;