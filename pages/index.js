// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';

// import {type AppState, type Store} from '../types';

import App from '../components/App';
import configureStore from '../redux/configureStore';
import { cardAhearts, card2hearts, card3hearts } from '../cards';

let startedState: AppState = {
  game: {
    status: 'started',
    previousCards: [Object.assign({}, cardAhearts, { flipped: true })],
    currentCard: Object.assign({}, card2hearts, { flipped: true }),
    remainingCards: [card3hearts],
    level:'easy'
  }
};

let lotsPlayedState: AppState = {
  game: {
    status: 'started',
    previousCards: [card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts,card3hearts],
    currentCard: Object.assign({}, card2hearts, { flipped: true }),
    remainingCards: [card3hearts],
    level:'easy'
  }
};

let wonPlayedState: AppState = {
  game: {
    status: 'won',
    previousCards: [Object.assign({}, cardAhearts, { flipped: true })],
    currentCard: Object.assign({}, card2hearts, { flipped: true }),
    remainingCards: [Object.assign({}, card3hearts, { flipped: true })],
    level:'easy'
  }
};

let lostPlayedState: AppState = {
  game: {
    status: 'lost',
    previousCards: [Object.assign({}, cardAhearts, { flipped: true })],
    currentCard: Object.assign({}, card2hearts, { flipped: true }),
    remainingCards: [Object.assign({}, card3hearts, { flipped: true })],
    level:'easy'
  }
};

const store: Store = configureStore();

export default function Index() {
  return (
    <Layout>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  );
}
