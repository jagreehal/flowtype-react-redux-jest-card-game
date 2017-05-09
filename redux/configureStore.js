// @flow

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import game from './modules/game';
const loggerMiddleware = createLogger();

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const reducer = combineReducers({
  game
});

const configureStore = (initialState?: any): StoreType => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(loggerMiddleware))
  );
};

export default configureStore;
