import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import './ToDoList.css'

const tasks = [
    {id: 1, name: 'test1', description: 'dfngnlkasdm;l', checked: false},
    {id: 2, name: 'test2', description: 'dfngnlkasdm;l', checked: false},
    {id: 3, name: 'testvnslkdzNACSKJLBlhjcHl:m%$^&*(', description: 'dfngnlkasdm;l', checked: true}
]

function ToDoList() {
  return (
    <div className='todolist'>
        <ul className='todolist__list'>
          {tasks.map(task =>
            <ToDoListItem task={task}/>
          )}
        </ul>
    </div>
  );
}

export default ToDoList;