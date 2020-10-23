import React from 'react';
import { Container } from '@material-ui/core';

import AddNewTask from './components/AddNewTaskForm';

const App = (): JSX.Element => {
  return (
    <Container>
      <AddNewTask />
    </Container>
  );
};

export default App;
