import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import type { Task } from '../../App';
import './ToDoList.css'

interface ToDoListProps {
  tasks: Task[]
  deleteTask: (id: Task['id']) => void
  checkTask: (id: Task['id']) => void
}

const ToDoList: React.FC<ToDoListProps> = ({tasks, deleteTask, checkTask}) => {

  return (
    <div className='todolist'>
        <ul className='todolist__list'>
          {tasks.map(task =>
            <ToDoListItem task={task} deleteTask={deleteTask} checkTask={checkTask}/>
          )}
        </ul>
    </div>
  );
}

export default ToDoList;