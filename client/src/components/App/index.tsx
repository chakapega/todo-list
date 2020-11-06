import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import { makeStyles } from '@material-ui/core/styles';
import { Theme, createStyles, Container } from '@material-ui/core';
import WrapperOfAddAndEditTask from '../WrapperOfAddAndEditTask';
import TaskList from '../TaskList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      padding: '0',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }),
);

const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container className={classes.container}>
        <WrapperOfAddAndEditTask />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
