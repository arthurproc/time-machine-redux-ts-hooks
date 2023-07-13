import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
