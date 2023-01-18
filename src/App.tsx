import React from 'react';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Panel />
      <ToDoList />
    </div>
  );
}

export default App;
