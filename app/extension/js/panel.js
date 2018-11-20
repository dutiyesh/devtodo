import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../components/App';
import 'STYLE/extension.scss';
import getStore from '../store';

function renderApp(store) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

getStore(renderApp);
