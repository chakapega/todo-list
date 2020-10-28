import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TaskPropsType } from '../../types/types';

const useStyles = makeStyles({
  listItem: {
    width: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #c4c4c4',
    borderRadius: '3px',
    margin: '7px 0',
    color: '#757575',
  },
  deleteForeverIcon: {
    cursor: 'pointer',
  },
});

const Task = ({ task, deleteTask, updateTasks }: TaskPropsType): JSX.Element => {
  const classes = useStyles();

  const { id, taskDescription } = task;

  const deleteTaskHandler = (): void => {
    deleteTask(id);
    updateTasks();
  };

  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={taskDescription} />
      <DeleteForeverIcon className={classes.deleteForeverIcon} onClick={deleteTaskHandler} />
    </ListItem>
  );
};

export default Task;
