import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setDataOfEditedTask } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from '@material-ui/core';

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

const EditTask = ({ dataOfEditedTask: { taskDescription }, setDataOfEditedTask }): JSX.Element => {
  const classes = useStyles();

  const [editedTaskDescription, setEditedTaskDescription] = useState(taskDescription);

  const textFieldchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEditedTaskDescription(e.target.value);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {};

  const cancelHandler = (): void => {
    setDataOfEditedTask(null);
  };

  return (
    <Container className={classes.container}>
      <Typography variant='h5'>Edit your task</Typography>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          className={classes.textField}
          variant='outlined'
          value={editedTaskDescription}
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

const mapDispatchToProps = (dispatch) => ({
  setDataOfEditedTask: (dataOfEditedTask) => dispatch(setDataOfEditedTask(dataOfEditedTask)),
});

export default connect(null, mapDispatchToProps)(EditTask);
