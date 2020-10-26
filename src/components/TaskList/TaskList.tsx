import React from 'react';

import { List } from '@material-ui/core';
import Task from '../Task/Task';

type TaskListProps = { tasks?: Array<string> };

const TaskList = ({ tasks }: TaskListProps): JSX.Element => {
  return (
    <List>
      {tasks.map((task, index) => {
        return <Task key={index} task={task} />;
      })}
    </List>
  );
};

export default TaskList;
