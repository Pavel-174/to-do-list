import React, { useState } from 'react';
import type { Task } from '../App/App';
import './Panel.css'

const DEFAULT__TODO = {name: '', description: ''}

interface PanelProps {
  addTask: ({ name, description }: Omit<Task, 'id' | 'checked'>) => void;
}

const Panel: React.FC<PanelProps> = ({addTask}) => {

  const [todo, setTodo] = useState(DEFAULT__TODO);
  const [isTaskInputValid, setTaskInputValid] = React.useState(true);
  const [isDescriptionInputValid, setDescriptionInputValid] = React.useState(true);
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [taskValidationMessage, setTaskValidationMessage] = React.useState('');
  const [descriptionValidationMessage, setDescriptionValidationMessage] = React.useState('');

  function onClick () {
    addTask(todo);
    setTodo(DEFAULT__TODO);
  }

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
    <div className='panel'>
      <form className='panel__form'>
        <div className='panel_input-box'>
          <input 
            placeholder="Task" 
            className={`panel__input ${!isTaskInputValid ? 'panel__input_type_error' : 'panel__input_type_ok'}`}
            value={todo.name} 
            name="name" 
            onChange={onChangeTask} 
            required 
            minLength={2} 
            maxLength={30}
          >
          </input>
          <span className={`panel__text-error ${!isTaskInputValid ? 'panel__text-error_active' : 'panel__text-error_inactive'}`}>{taskValidationMessage}</span>
        </div>
        <div className='panel_input-box'>
          <input 
            placeholder="Description" 
            className={`panel__input ${!isDescriptionInputValid ? 'panel__input_type_error' : 'panel__input_type_ok'}`}
            value={todo.description} 
            name="description" 
            onChange={onChangeDescription} 
            required 
            minLength={2} 
            maxLength={150}
          >
          </input>
          <span className={`panel__text-error ${!isDescriptionInputValid ? 'panel__text-error_active' : 'panel__text-error_inactive'}`}>{descriptionValidationMessage}</span>
        </div>
      </form>
      <button className='panel__button' onClick={onClick} disabled={! buttonSubmitState ? true : false}>ADD</button>
    </div>
  );
}

export default Panel;