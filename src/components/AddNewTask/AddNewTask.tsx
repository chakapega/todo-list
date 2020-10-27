import React, { useState } from 'react';

import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import { AddNewTaskProps, task } from '../../types/types';

const AddNewTask = ({ tasks, updateTasks, saveTasks }: AddNewTaskProps): JSX.Element => {
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
    <Container>
      <Typography variant="h5">Add new task</Typography>
      <form onSubmit={onSubmit}>
        <Grid>
          <TextField variant="outlined" label="Write your task" value={taskDescription} onChange={onLabelChange} />
        </Grid>
        <Grid>
          <Button type="submit" color="primary" variant="contained">
            Add
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default AddNewTask;
