import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import taskService from '../../services/TaskService';

const useStyles = makeStyles({
  container: {
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '50px',
    marginBottom: '20px',
  },
  form: {
    width: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    width: '400px',
  },
});

const AddNewTask = (): JSX.Element => {
  const classes = useStyles();

  const [taskDescription, setTaskDescription] = useState('');

  const { addTask } = taskService;

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setTaskDescription(e.target.value);

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (taskDescription) {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">Add new task</Typography>
      <form className={classes.form} onSubmit={addTaskHandler}>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Write your task"
          value={taskDescription}
          onChange={textFieldchangeHandler}
          inputProps={{
            maxLength: 333,
          }}
        />
        <Button type="submit" color="primary" variant="contained">
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddNewTask;
