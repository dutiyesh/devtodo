import isEqual from 'lodash.isequal';

import { STORAGE_NAME } from 'SOURCE/constants';
import syncTodo from 'SOURCE/actionCreators/Root';

export function getPreloadedState(callback) {
  chrome.storage.sync.get([STORAGE_NAME], (result) => {
    const state = result[STORAGE_NAME];

    callback(state);
  });
}

export function subscribeToStore(store) {
  store.subscribe(() => {
    const state = store.getState();

    chrome.storage.sync.set({
      [STORAGE_NAME]: state,
    });
  });

  chrome.storage.onChanged.addListener((changes) => {
    const storageChanges = changes[STORAGE_NAME];
    const { newValue } = storageChanges;
    const state = store.getState();

    if (!isEqual(newValue, state)) {
      store.dispatch(syncTodo(newValue));
    }
  });
}
