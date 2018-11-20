import thunk from 'redux-thunk';

function configMiddleware() {
  let middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default; // eslint-disable-line global-require
    middleware = [...middleware, logger];
  }

  return middleware;
}

export default configMiddleware;
