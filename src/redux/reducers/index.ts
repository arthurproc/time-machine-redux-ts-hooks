import { combineReducers } from 'redux';
import timeMachineReducer from './time-machine';

const rootReducers = combineReducers({
  timeMachine: timeMachineReducer,
});

export default rootReducers;
