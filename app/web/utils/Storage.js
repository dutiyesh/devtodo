import { STORAGE_NAME } from 'SOURCE/constants';

export function getPreloadedState() {
  const state = localStorage.getItem(STORAGE_NAME);

  if (state) {
    return JSON.parse(state);
  }

  return undefined;
}

export function saveStoreData(store) {
  const state = JSON.stringify(store.getState());

  localStorage.setItem(STORAGE_NAME, state);
}

export function subscribeToStore(store) {
  store.subscribe(() => {
    saveStoreData(store);
  });
}
