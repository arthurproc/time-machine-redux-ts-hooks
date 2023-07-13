import { AnyAction } from 'redux';
import {
  LOADING,
  SEARCH_SNAPSHOT_ERROR,
  SEARCH_SNAPSHOT_SUCCESS,
  SearchSnapshotErrorAction,
  SearchSnapshotSuccessAction,
  SetLoadingAction,
} from '../actions';
import { TimeMachineState } from '../../types';

const INITIAL_STATE = {
  url: '',
  timestamp: '',
  loading: false,
  error: true,
  errorMessage: '',
  currencies: {},
};

const timeMachineReducer = (
  state: TimeMachineState = INITIAL_STATE,
  // action: AnyAction,
  action: SearchSnapshotSuccessAction | SearchSnapshotErrorAction | SetLoadingAction,
) => {
  switch (action.type) {
    case SEARCH_SNAPSHOT_SUCCESS: {
      return {
        ...state,
        timestamp: action.payload.timestamp,
        url: action.payload.url,
        loading: false,
        error: false,
      };
    }
    case SEARCH_SNAPSHOT_ERROR: {
      return {
        ...state,
        timestamp: '',
        url: '',
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    }
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default timeMachineReducer;
