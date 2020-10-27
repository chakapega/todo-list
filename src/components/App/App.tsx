import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';
import AddNewTask from '../AddNewTask/AddNewTask';
import TaskList from '../TaskList/TaskList';
import { tasks } from '../../types/types';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState([]);

  useEffect((): void => {
    updateTasks();
  }, []);

  const updateTasks = (): void => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
  };

  const saveTasks = (tasks: tasks): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <Container>
      <AddNewTask tasks={tasks} updateTasks={updateTasks} saveTasks={saveTasks} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default App;
