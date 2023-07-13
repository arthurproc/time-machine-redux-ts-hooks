import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type FormValues = {
  url: string;
  year: string;
  month: string;
  day: string;
  hour: string;
};

export type Snapshot = {
  url: string;
  timestamp: string;
};

export type TimeMachineState = {
  url: string;
  timestamp: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  currencies: {
    [key: string]: string;
  };
};

export type ReduxState = {
  timeMachine: TimeMachineState;
};

export type Dispatch = ThunkDispatch<ReduxState, void, AnyAction>;
