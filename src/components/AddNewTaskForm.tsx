import React from 'react';

import './AddNewTaskForm.css';

const AddNewTaskForm = (): JSX.Element => {
  return (
    <form className="add-new-task-form">
      <input className="add-new-task-form__input" type="text" placeholder="Write your task" />
      <button className="add-new-task-form__button_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddNewTaskForm;
