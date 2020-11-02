import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import Task from '../Task';
import { TaskType } from '../../types';
import taskService from '../../services/TaskService';

const TaskList = (): JSX.Element => {
  const { get } = taskService;

  const [tasks, setTasks] = useState([]);

  const updateTasks = async (): Promise<void> => {
    setTasks(await get());
  };

  useEffect((): void => {
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
