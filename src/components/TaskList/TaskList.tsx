import React from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';
import { TaskListProps, task } from '../../types/types';

const TaskList = ({ tasks, deleteTask }: TaskListProps): JSX.Element => {
  return (
    <List>
      {tasks.map((task: task) => {
        const { id } = task;

        return <Task key={id} task={task} deleteTask={deleteTask} />;
      })}
    </List>
  );
};

export default TaskList;
