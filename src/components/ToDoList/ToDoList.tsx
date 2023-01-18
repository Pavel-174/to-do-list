import React from 'react';
import './ToDoList.css'

const tasks = [
    {id: '1', task: 'test1', description: 'dfngnlkasdm;l', checked: false},
    {id: '2', task: 'test2', description: 'dfngnlkasdm;l', checked: false},
    {id: '3', task: 'testvnslkdzNACSKJLBlhjcHl:m%$^&*(', description: 'dfngnlkasdm;l', checked: true}
]

function ToDoList() {
  return (
    <div className='todolist'>
        <ul>
          {tasks.map(task =>
            <li className="todolist__item" key={task.id}>
              <h5 className="todolist__header">{task.task}</h5>
              <p  className="todolist__text">{task.description}</p>
            </li>
          )}
        </ul>
    </div>
  );
}

export default ToDoList;