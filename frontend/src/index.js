import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf'
import csrfFetch, { restoreCSRF } from './store/csrf';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
  
// restoreSession().then(initializeApp)
// in place of line 37 we have lines 40 - 44?

if (sessionStorage.getItem("X-CSRF-Token") === null) {
  restoreCSRF().then(renderApp);
} else {
  renderApp();
}