import React from 'react';
import Header from '../Header/Header';
import Panel from '../Panel/Panel';
import ToDoList from '../ToDoList/ToDoList';
import Footer from '../Footer/Footer';
import './App.css';

export type Task = {
      id: number | null;
      name: any;
      description: any;
      checked: boolean | null;
}

function App() {

  const [edit, setEdit] = React.useState <number | null> (null);

  // const [tasks, setTasks] = React.useState([
  //   {id: 1, name: 'test1', description: 'dfngnlkasdm;l', checked: false},
  //   {id: 2, name: 'test2', description: 'dfngnlkasdm;l', checked: false},
  //   {id: 3, name: 'Test3', description: 'dfngnlkasdm;l', checked: true}
  // ]);
  
  const [tasks, setTasks] = React.useState(() => {
    const saved: any = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function editTask (id: Task['id']) {
    setEdit(id)
  };

  function deleteTask (id: Task['id']) {
    setTasks(tasks.filter((task: { id: number | null; }) => task.id !== id))
  };

  function addTask ({name, description}: Omit<Task, 'id' | 'checked'>) {
    setTasks([...tasks, {id: tasks.length + 1, name, description, checked: false}])
  }

  function checkTask (id: Task['id']) {
    setTasks(tasks.map((task: { id: number | null; checked: any; }) => {
      if(task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    }))
  };

  const changeTask = ({ name, description }: Omit<Task, 'id' | 'checked'>) => {
    setTasks(
      tasks.map((task: { id: number | null; }) => {
        if (task.id === edit) {
          return { ...task, name, description };
        }
        return task;
      })
    );
    setEdit(null);
  };

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Panel addTask={addTask} />
        <ToDoList tasks={tasks} deleteTask={deleteTask} checkTask={checkTask}  editTask={editTask} changeTask={changeTask}  edit={edit}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
