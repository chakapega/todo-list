import React from 'react';
import { useDispatch } from 'react-redux';

import { setDataOfEditedTask, setTasks } from '../../store/task/actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
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
  deleteForeverOutlinedIcon: {
    cursor: 'pointer',
  },
  editOutlinedIcon: {
    cursor: 'pointer',
  },
});

const Task = ({ task }: TaskPropsType): JSX.Element => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { id, taskDescription, date } = task;

  const deleteTaskHandler = async (id: string) => {
    const { deleteTask, get } = taskService;

    await deleteTask(id);
    dispatch(setTasks(await get()));
  };

  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={taskDescription} />
      <DateRangeIcon titleAccess={date} />
      <EditOutlinedIcon
        className={classes.editOutlinedIcon}
        titleAccess='edit task'
        onClick={() => dispatch(setDataOfEditedTask(task))}
      />
      <DeleteForeverOutlinedIcon
        className={classes.deleteForeverOutlinedIcon}
        titleAccess='delete task'
        onClick={(): Promise<void> => deleteTaskHandler(id)}
      />
    </ListItem>
  );
};

export default Task;
