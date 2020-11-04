import React from 'react';
import { connect } from 'react-redux';

import { setDataOfEditedTask } from '../../store/task/actionCreators';
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

const Task = ({ task, setDataOfEditedTask }: TaskPropsType): JSX.Element => {
  const classes = useStyles();
  const { id, taskDescription, date } = task;

  const { deleteTask } = taskService;

  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={taskDescription} />
      <DateRangeIcon titleAccess={date} />
      <EditOutlinedIcon
        className={classes.editOutlinedIcon}
        titleAccess='edit task'
        onClick={() => setDataOfEditedTask(task)}
      />
      <DeleteForeverOutlinedIcon
        className={classes.deleteForeverOutlinedIcon}
        titleAccess='delete task'
        onClick={(): Promise<void> => deleteTask(id)}
      />
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setDataOfEditedTask: (dataOfEditedTask) => dispatch(setDataOfEditedTask(dataOfEditedTask)),
});

export default connect(null, mapDispatchToProps)(Task);
