import React from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

type TaskProps = { task?: string };

const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>
        <CancelIcon />
      </ListItemIcon>
      <ListItemText primary={task} />
    </ListItem>
  );
};

export default Task;
