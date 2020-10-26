import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';
import AddNewTask from '../AddNewTask/AddNewTask';
import TaskList from '../TaskList/TaskList';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    updateTasks();
  }, []);

  const updateTasks = (): void => {
    const tasks = JSON.parse(localStorage.getItem('arrayOfTasks'));

    setTasks(tasks);
  };

  return (
    <Container>
      <AddNewTask updateTasks={updateTasks} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default App;
