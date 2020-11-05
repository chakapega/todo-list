import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDataOfEditedTask, setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import taskService from '../../services/TaskService';
import { StoreStateType } from '../../types';

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
    width: '700px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    width: '500px',
  },
});

const EditTask = (): JSX.Element => {
  const classes = useStyles();

  const { id, taskDescription } = useSelector((state: StoreStateType) => state.task.dataOfEditedTask);

  const dispatch = useDispatch();

  const [editedTaskDescription, setEditedTaskDescription] = useState(taskDescription);

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEditedTaskDescription(e.target.value);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { edit, get } = taskService;

    await edit(id, editedTaskDescription);
    dispatch(setDataOfEditedTask(null));
    dispatch(setTasks(await get()));
  };

  const cancelHandler = (): void => {
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
        <Button type='submit' color='primary' variant='contained' disabled={!editedTaskDescription}>
          Edit
        </Button>
        <Button type='button' color='primary' variant='contained' onClick={cancelHandler}>
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default EditTask;
