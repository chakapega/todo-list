import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';

const AddNewTaskForm = (): JSX.Element => {
  return (
    <Container>
      <Typography variant="h5">Add new task</Typography>
      <Grid>
        <TextField variant="outlined" label="Write your task" />
      </Grid>
      <Grid>
        <Button type="button" color="primary" variant="contained">
          Add
        </Button>
      </Grid>
    </Container>
  );
};

export default AddNewTaskForm;
