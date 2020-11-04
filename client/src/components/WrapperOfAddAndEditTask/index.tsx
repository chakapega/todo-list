import React from 'react';
import { connect } from 'react-redux';

import { WrapperOfAddAndEditTaskType } from '../../types';
import { Container } from '@material-ui/core';
import EditTask from '../EditTask';
import AddNewTask from '../AddTask';

const WrapperOfAddAndEditTask = ({ dataOfEditedTask }: WrapperOfAddAndEditTaskType): JSX.Element => {
  return (
    <Container>
      {dataOfEditedTask && <EditTask dataOfEditedTask={dataOfEditedTask} />}
      {!dataOfEditedTask && <AddNewTask />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  dataOfEditedTask: state.task.dataOfEditedTask,
});

export default connect(mapStateToProps)(WrapperOfAddAndEditTask);
