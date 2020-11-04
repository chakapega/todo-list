import { combineReducers } from 'redux';
import setEditTaskReducer from './task/reducer';

const rootReducer = combineReducers({
  editTask: setEditTaskReducer,
});

export default rootReducer;
