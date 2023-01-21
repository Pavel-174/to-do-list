import React from 'react';
import type { Task } from '../../App';

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
        <div className='todolist__header-box'>
          <h3 className="todolist__header">{task.name}</h3>
          <button className='todolist__button todolist__button_item' onClick={() => editTask(task.id)} disabled={task.checked ? true : false}></button>
        </div>
        <p  className="todolist__text">{task.description}</p>
      </div>
      <div className='todolist__button-box'> 
        <button className="todolist__button" onClick={() => checkTask(task.id)}>Complete</button>
        <button className="todolist__button" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoListItem;