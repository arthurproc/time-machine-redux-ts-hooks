import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import './time-machine.css';
import LoadingSpinner from './loading-spinner';

function TimeMachine() {
  const { timestamp, loading: isLoading, url } = useSelector(
    (state: ReduxState) => state.timeMachine,
  );

  const renderTimeFound = () => {
    return (
      <div className="row">
        <header
          className="time__machine__header"
        >
          <h3
            className="fw-light"
          >
            Tempo encontrado:
          </h3>
          <span
            className="lead text-muted"
          >
            {timestamp.substring(6, 8)}
            /
            {timestamp.substring(4, 6)}
            /
            {timestamp.substring(0, 4)}
          </span>
          <span className="lead text-muted">
            {timestamp.substring(8, 10)}
            :
            {timestamp.substring(10, 12)}
            {' '}
            {timestamp.substring(12, 14)}
            s
          </span>
        </header>
      </div>
    );
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className="col-md-12">
          <h1>Máquina do tempo ⌛️</h1>
        </div>
      </div>
      { isLoading ? <LoadingSpinner /> : (
        <>
          { timestamp && renderTimeFound() }
          { timestamp
            && (
              <div className="time__machine__page__container">
                <iframe
                  src={ url || '' }
                  width="100%"
                  title="description"
                  height="100%"
                />
              </div>
            )}
        </>
      )}
    </div>
  );
}

export default TimeMachine;
