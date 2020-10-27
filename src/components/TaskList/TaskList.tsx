import React from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';
import { TaskListPropsType, taskType } from '../../types/types';

const TaskList = ({ tasks, deleteTask }: TaskListPropsType): JSX.Element => {
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
