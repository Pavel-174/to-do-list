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

  const [tasks, setTasks] = React.useState([
    {id: 1, name: 'test1', description: 'dfngnlkasdm;l', checked: false},
    {id: 2, name: 'test2', description: 'dfngnlkasdm;l', checked: false},
    {id: 3, name: 'testvnslkdzNACSKJLBlhjcHl:m%$^&*(', description: 'dfngnlkasdm;l', checked: true}
  ]);


  function deleteTask (id: Task['id']) {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <div className="App">
      <Header />
      <Panel />
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
