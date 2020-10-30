import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import Task from '../Task';
import { TaskType } from '../../types';
import taskService from '../../services';

const TaskList = (): JSX.Element => {
  const { subscribe, getTasks } = taskService;

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
      {tasks.map((task: TaskType) => {
        const { id } = task;

        return <Task key={id} task={task} />;
      })}
    </List>
  );
};

export default TaskList;
