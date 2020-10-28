import React, { useEffect, useState } from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';
import { taskType } from '../../types/types';
import taskService from '../../services/TaskService';

const TaskList = (): JSX.Element => {
  const { subscribe, getTasks, deleteTask } = taskService;

  const [tasks, setTasks] = useState([]);

  const updateTasks = (): void => {
    setTasks(getTasks());
  };

  useEffect((): void => {
    subscribe(updateTasks);
    updateTasks();
  }, []);

  return (
    <List>
      {tasks.map((task: taskType) => {
        const { id } = task;

        return <Task key={id} task={task} deleteTask={deleteTask} />;
      })}
    </List>
  );
};

export default TaskList;
