import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AppStore } from './stores/AppStore';

var appStore = AppStore.create({}, {
  alert: function alert(m) {
    return console.alert(m);
  }
});

ReactDOM.render(React.createElement(
  Provider,
  { appStore: appStore },
  React.createElement(App, null)
), document.getElementById('root'));
registerServiceWorker();