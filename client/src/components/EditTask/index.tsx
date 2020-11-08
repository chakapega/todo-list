import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDataOfEditedTask, setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button, Box } from '@material-ui/core';
import taskService from '../../services/TaskService';
import { StoreStateType } from '../../types';

const useStyles = makeStyles({
  container: {
    width: '95%',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
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
  box: {
    width: '200px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const EditTask: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { id, taskDescription } = useSelector((state: StoreStateType) => state.task.dataOfEditedTask);

  const [editedTaskDescription, setEditedTaskDescription] = useState(taskDescription);

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskDescription(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { edit, get } = taskService;

    await edit(id, editedTaskDescription);
    dispatch(setDataOfEditedTask(null));
    dispatch(setTasks(await get()));
  };

  const cancelHandler = () => {
    dispatch(setDataOfEditedTask(null));
  };

  return (
    <Container className={classes.container}>
      <Typography variant='h5'>Edit your task</Typography>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          className={classes.textField}
          variant='outlined'
          value={editedTaskDescription}
          autoFocus
          onChange={textFieldchangeHandler}
          inputProps={{
            maxLength: 333,
          }}
        />
        <Box className={classes.box}>
          <Button type='submit' color='primary' variant='contained' disabled={!editedTaskDescription}>
            Edit
          </Button>
          <Button type='button' color='primary' variant='contained' onClick={cancelHandler}>
            Cancel
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditTask;
