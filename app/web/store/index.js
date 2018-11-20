import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'SOURCE/reducers';
import configMiddleware from 'EXTENSION/utils/Middleware';
import { getPreloadedState, saveStoreData, subscribeToStore } from '../utils/Storage';

const middleware = configMiddleware();
const preloadedState = getPreloadedState();

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middleware),
);

saveStoreData(store);
subscribeToStore(store);

export default store;
