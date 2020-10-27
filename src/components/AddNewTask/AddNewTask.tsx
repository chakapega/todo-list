import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { AddNewTaskProps, task } from '../../types/types';

const useStyles = makeStyles({
  container: {
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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

const AddNewTask = ({ tasks, updateTasks, saveTasks }: AddNewTaskProps): JSX.Element => {
  const classes = useStyles();

  const [taskDescription, setTaskDescription] = useState('');

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTaskDescription(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (taskDescription) addTask(taskDescription);
  };

  const addTask = (taskDescription: string): void => {
    const task: task = {
      id: tasks.length,
      taskDescription,
    };

    tasks.push(task);
    saveTasks(tasks);
    updateTasks();
    setTaskDescription('');
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">Add new task</Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Write your task"
          value={taskDescription}
          onChange={onLabelChange}
        />
        <Button type="submit" color="primary" variant="contained">
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddNewTask;
