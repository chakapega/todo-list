import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';

const AddNewTask = (): JSX.Element => {
  const [taskDescription, setTaskDescription] = useState('');

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTaskDescription(e.target.value);

  return (
    <Container>
      <Typography variant="h5">Add new task</Typography>
      <form>
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
