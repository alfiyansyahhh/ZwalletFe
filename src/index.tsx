import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import { store, persistor } from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import 'assets/styles';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
