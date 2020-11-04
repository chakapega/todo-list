import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

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
    <Provider store={store}>
      <Container className={classes.container}>
        <AddNewTask />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
