import React from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TaskProps } from '../../types/types';

const Task = ({ taskDescription }: TaskProps): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>
        <DeleteForeverIcon />
      </ListItemIcon>
      <ListItemText primary={taskDescription} />
    </ListItem>
  );
};

export default Task;
