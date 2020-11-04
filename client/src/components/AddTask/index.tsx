import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import taskService from '../../services/TaskService';
import { AddTaskPropsType } from '../../types';

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

const AddTask = ({ setTasks }: AddTaskPropsType): JSX.Element => {
  const classes = useStyles();

  const [taskDescription, setTaskDescription] = useState('');

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setTaskDescription(e.target.value);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { add, get } = taskService;

    await add(taskDescription);
    setTasks(await get());
    setTaskDescription('');
  };

  return (
    <Container className={classes.container}>
      <Typography variant='h5'>Add new task</Typography>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          className={classes.textField}
          variant='outlined'
          label='Write your task'
          value={taskDescription}
          onChange={textFieldchangeHandler}
          inputProps={{
            maxLength: 333,
          }}
        />
        <Button type='submit' color='primary' variant='contained' disabled={!taskDescription}>
          Add
        </Button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTasks: (tasks) => dispatch(setTasks(tasks)),
});

export default connect(null, mapDispatchToProps)(AddTask);
