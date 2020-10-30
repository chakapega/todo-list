import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AddNewTask from '../AddNewTask';
import TaskList from '../TaskList';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container data-testid='app-container' className={classes.container}>
      <AddNewTask />
      <TaskList />
    </Container>
  );
};

export default App;
