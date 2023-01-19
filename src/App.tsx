import React from 'react';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

export type Task = {
      id: number;
      name: string;
      description: string;
      checked: boolean;
}

function App() {

  const [edit, setEdit] = React.useState <number | null> (null);

  const [tasks, setTasks] = React.useState([
    {id: 1, name: 'test1', description: 'dfngnlkasdm;l', checked: false},
    {id: 2, name: 'test2', description: 'dfngnlkasdm;l', checked: false},
    {id: 3, name: 'testvnslkdzNACSKJLBlhjcHl:m%$^&*(', description: 'dfngnlkasdm;l', checked: true}
  ]);

  function editTask (id: Task['id']) {
    setEdit(id)
  };

  function deleteTask (id: Task['id']) {
    setTasks(tasks.filter(task => task.id !== id))
  };

  function addTask ({name, description}: Omit<Task, 'id' | 'checked'>) {
    setTasks([...tasks, {id: tasks[tasks.length-1].id + 1, name, description, checked: false}])
  }

  function checkTask (id: Task['id']) {
    setTasks(tasks.map((task) => {
      if(task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    }))
  };

  return (
    <div className="App">
      <Header />
      <Panel addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} checkTask={checkTask}  editTask={editTask} />
    </div>
  );
}

export default App;
