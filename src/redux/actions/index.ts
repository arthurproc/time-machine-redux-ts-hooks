import getClosestSnapshot from '../../services/web-archive-api';
import { Dispatch, FormValues, Snapshot } from '../../types';

// Action Types
export const SEARCH_SNAPSHOT_SUCCESS = 'SEARCH_SNAPSHOT_SUCCESS';
export const SEARCH_SNAPSHOT_ERROR = 'SEARCH_SNAPSHOT_ERROR';
export const LOADING = 'LOADING';

// Action Creators
export type SearchSnapshotSuccessAction = {
  type: typeof SEARCH_SNAPSHOT_SUCCESS;
  payload: Snapshot;
};

export const searchSnapshotSuccess = (
  snapshot: Snapshot,
): SearchSnapshotSuccessAction => {
  return {
    type: SEARCH_SNAPSHOT_SUCCESS,
    payload: snapshot,
  };
};

export type SearchSnapshotErrorAction = {
  type: typeof SEARCH_SNAPSHOT_ERROR;
  payload: string;
};

export const searchSnapshotError = (
  message: string,
): SearchSnapshotErrorAction => ({
  type: SEARCH_SNAPSHOT_ERROR,
  payload: message,
});

export type SetLoadingAction = {
  type: typeof LOADING;
};

export const setLoading = (): SetLoadingAction => ({
  type: LOADING,
});

export const searchSnapshot = (payload: FormValues) => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  const { year, month, day, hour, url } = payload;
  const timestamp = `${year}${month}${day}${hour}0000`;
  try {
    const timeMachineResult = await getClosestSnapshot(timestamp, url);
    dispatch(searchSnapshotSuccess(timeMachineResult));
  } catch (error) {
    dispatch(searchSnapshotError(
      (error as Error).message
      ?? 'Não foi possível encontrar resultados para a sua pesquisa',
    ));
  }
};
