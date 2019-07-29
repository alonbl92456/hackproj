import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {configureStore} from './store';


// Inits Sagas
//Object.keys(appSagasWatchers).map(curWatcherKey => sagaMiddleware.run(appSagasWatchers[curWatcherKey]));

const app = (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  

ReactDOM.render(app, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
