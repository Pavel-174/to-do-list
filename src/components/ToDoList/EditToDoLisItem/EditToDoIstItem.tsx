import React, { useState } from 'react';
import type { Task } from '../../App/App';
import "../ToDoList.css"

interface EditToDoListItemProps {
  task: Task;
    changeTask: ({ name, description }: Omit<Task, 'id' | 'checked'>) => void;
}

const EditToDoListItem: React.FC<EditToDoListItemProps> = ({task, changeTask}) => {

  const [todo, setTodo] = useState({name: task.name, description: task.description});
  const [isTaskInputValid, setTaskInputValid] = React.useState(true);
  const [isDescriptionInputValid, setDescriptionInputValid] = React.useState(true);
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [taskValidationMessage, setTaskValidationMessage] = React.useState('');
  const [descriptionValidationMessage, setDescriptionValidationMessage] = React.useState('');
  
  function onClick () {
    changeTask(todo);
  };

  function onChangeTask (e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setTodo({...todo, [name]: value});
    checkTaskValidation(e.target);
  };

  function onChangeDescription (e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setTodo({...todo, [name]: value});
    checkDescriptionValidation(e.target);
  };

   //Валидация формы
   React.useEffect(()=> {
    if (isTaskInputValid && isDescriptionInputValid) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [isTaskInputValid, isDescriptionInputValid]);

  function checkTaskValidation(inputElement: any) {
    if (!inputElement.validity.valid) {
      setTaskInputValid(false);
      setTaskValidationMessage(inputElement.validationMessage);
    } else {
      setTaskInputValid(true);
    }
  }

  function checkDescriptionValidation(inputElement: any) {
    if (!inputElement.validity.valid) {
      setDescriptionInputValid(false);
      setDescriptionValidationMessage(inputElement.validationMessage);
    } else {
      setDescriptionInputValid(true);
    }
  }

  return (
    <li className="todolist__item" key={task.id}>
      <form className='todolist__input-box'>
        <input 
          placeholder="Task" 
          className={`todolist__input ${!isTaskInputValid ? 'todolist__input_type_error' : 'todolist__input_type_ok'}`}
          value={todo.name} 
          name="name" 
          onChange={onChangeTask} 
          required 
          minLength={2} 
          maxLength={30}
        >
        </input>
        <span className={`todolist__text-error ${!isTaskInputValid ? 'todolist__text-error_active' : 'todolist__text-error_inactive'}`}>{taskValidationMessage}</span>
        <input 
          placeholder="Description" 
          className={`todolist__input ${!isDescriptionInputValid ? 'todolist__input_type_error' : 'todolist__input_type_ok'}`}
          value={todo.description} 
          name="description" 
          onChange={onChangeDescription} 
          required 
          minLength={2} 
          maxLength={150}
        >
        </input>
        <span className={`todolist__text-error ${!isDescriptionInputValid ? 'todolist__text-error_active' : 'todolist__text-error_inactive'}`}>{descriptionValidationMessage}</span>
      </form>
      <button className='todolist__button' onClick={onClick} disabled={! buttonSubmitState ? true : false}>Save</button>
    </li>
  );
}

export default EditToDoListItem;