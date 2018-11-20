import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'SOURCE/reducers';
import configMiddleware from '../utils/Middleware';
import { getPreloadedState, subscribeToStore } from '../utils/Storage';

const middleware = configMiddleware();

function getStore(callback) {
  getPreloadedState((preloadedState) => {
    const store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middleware),
    );

    callback(store);

    subscribeToStore(store);
  });
}

export default getStore;
