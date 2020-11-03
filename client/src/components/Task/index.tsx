import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TaskPropsType } from '../../types';
import taskService from '../../services/TaskService';

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

const Task = ({ task: { id, taskDescription, date } }: TaskPropsType): JSX.Element => {
  const classes = useStyles();

  // const { deleteTask } = taskService;

  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={taskDescription} />
      <DateRangeIcon titleAccess={date} />
      <DeleteForeverIcon
        className={classes.deleteForeverIcon}
        titleAccess='delete task'
        onClick={(): void => console.log('delete task')}
      />
    </ListItem>
  );
};

export default Task;
