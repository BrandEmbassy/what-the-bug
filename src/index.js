import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AppStore } from './stores/AppStore';

const appStore = AppStore.create(
  {},
  {
      alert: m => console.alert(m)
  }
)

ReactDOM.render(
  <Provider appStore={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
