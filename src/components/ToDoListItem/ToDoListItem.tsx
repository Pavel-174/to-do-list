import React from 'react';

interface ToDoListItemProps {
    task: {
        id: number;
        name: string;
        description: string;
        checked: boolean;
    }
}

const ToDoListItem:  React.FC<ToDoListItemProps> = ({task}) => {
  return (
    <li className="todolist__item" key={task.id}>
      <div className={`todolist__task ${task.checked ? `todolist__task_checked`: ""}`}>
        <h5 className="todolist__header">{task.name}</h5>
        <p  className="todolist__text">{task.description}</p>
      </div>
      <div>
        <button className="todolist__button">Complete</button>
        <button className="todolist__button">Delete</button>
      </div>
    </li>
  );
}

export default ToDoListItem;