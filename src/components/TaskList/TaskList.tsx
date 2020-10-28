import React, { useEffect, useState } from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';
import { taskType } from '../../types/types';
import TaskService from '../../services/TaskService';

const TaskList = (): JSX.Element => {
  const { getTasks, deleteTask } = new TaskService();

  const [tasks, setTasks] = useState([]);

  useEffect((): void => {
    updateTasks();
  }, []);

  const updateTasks = (): void => {
    setTasks(getTasks());
  };

  return (
    <List>
      {tasks.map((task: taskType) => {
        const { id } = task;

        return <Task key={id} task={task} deleteTask={deleteTask} updateTasks={updateTasks} />;
      })}
    </List>
  );
};

export default TaskList;
