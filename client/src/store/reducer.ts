import { combineReducers } from 'redux';
import setEditTaskReducer from './task/reducer';

const rootReducer = combineReducers({
  task: setEditTaskReducer,
});

export default rootReducer;
