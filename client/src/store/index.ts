import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { StoreStateType } from '../types';
import rootReducer from './reducer';

const store: StoreStateType = createStore(rootReducer, composeWithDevTools());

export default store;
