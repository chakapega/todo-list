import React from 'react';
import { useSelector } from 'react-redux';

import EditTask from '../EditTask';
import AddTask from '../AddTask';
import { StoreStateType } from '../../types';

const WrapperOfAddAndEditTask: React.FC = () => {
  const dataOfEditedTask = useSelector((state: StoreStateType) => state.task.dataOfEditedTask);

  return <>{dataOfEditedTask ? <EditTask /> : <AddTask />}</>;
};

export default WrapperOfAddAndEditTask;
