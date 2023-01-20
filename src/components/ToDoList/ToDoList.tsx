import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import EditToDoListItem from '../EditToDoLisItem/EditToDoIstItem'
import type { Task } from '../../App';
import './ToDoList.css'

interface ToDoListProps {
  tasks: Task[];
  edit: Task['id'] | null;
  deleteTask: (id: Task['id']) => void;
  checkTask: (id: Task['id']) => void;
  editTask: (id: Task['id']) => void;
  changeTask: ({ name, description }: Omit<Task, 'id' | 'checked'>) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({tasks, deleteTask, checkTask, editTask, changeTask, edit}) => {

  return (
    <div className='todolist'>
        <ul className='todolist__list'>
          {tasks.map(task => {
            if (task.id === edit)
             return (
              <EditToDoListItem key={task.id} task={task} changeTask={changeTask}/>
             );
             return (
              <ToDoListItem key={task.id} task={task} deleteTask={deleteTask} checkTask={checkTask} editTask={editTask} />
             )
          }
          )}
        </ul>
    </div>
  );
}

export default ToDoList;