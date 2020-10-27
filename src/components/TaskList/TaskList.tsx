import React from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';
import { TaskListProps, task } from '../../types/types';

const TaskList = ({ tasks }: TaskListProps): JSX.Element => {
  return (
    <List>
      {tasks.map((task: task) => {
        const { id, taskDescription } = task;

        return <Task key={id} taskDescription={taskDescription} />;
      })}
    </List>
  );
};

export default TaskList;
