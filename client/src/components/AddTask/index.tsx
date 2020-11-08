import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import taskService from '../../services/TaskService';

const useStyles = makeStyles({
  container: {
    width: '95%',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    marginLeft: '0',
    marginRight: '0',
    padding: '0',
  },
  form: {
    width: '100%',
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
  },
});

const AddTask: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [taskDescription, setTaskDescription] = useState('');

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { add, get } = taskService;

    await add(taskDescription);
    dispatch(setTasks(await get()));
    setTaskDescription('');
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">Add new task</Typography>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Write your task"
          value={taskDescription}
          onChange={textFieldchangeHandler}
          inputProps={{
            maxLength: 300,
          }}
        />
        <Button type="submit" color="primary" variant="contained" disabled={!taskDescription}>
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddTask;
