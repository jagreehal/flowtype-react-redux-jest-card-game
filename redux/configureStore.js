// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import game from './modules/game';
const loggerMiddleware = createLogger();

const reducer = combineReducers({
  game
});

const configureStore = (initialState?: any): StoreType => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(loggerMiddleware)
  );
};

export default configureStore;
