import React from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TaskProps } from '../../types/types';

const Task = ({ task, deleteTask }: TaskProps): JSX.Element => {
  const { id, taskDescription } = task;

  return (
    <ListItem>
      <ListItemIcon>
        <DeleteForeverIcon onClick={() => deleteTask(id)} />
      </ListItemIcon>
      <ListItemText primary={taskDescription} />
    </ListItem>
  );
};

export default Task;
