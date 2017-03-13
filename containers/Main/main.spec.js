// @flow

import React from 'react';
import Main from './index';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Home from '../../components/Home';
import PreviousCards from '../../components/PreviousCards';
import Message from '../../components/Message';
import CurrentAndNext from '../../components/CurrentAndNext';

describe('Main tests', () => {
  const mockStore = configureStore();
  describe('Will render Home', () => {
    it(' when there is no game', () => {
      const store = mockStore();
      const wrapper = mount(<Main store={store} />);
      expect(wrapper.find(Home).length).toBe(1);
    });

    it('when game is notStarted', () => {
      const state: AppState = {
        game: { status: 'notStarted' }
      };
      const store = mockStore(state);
      const wrapper = mount(<Main store={store} />);
      expect(wrapper.find(Home).length).toBe(1);
    });
  });

  it('Will render correct components when game is started', () => {
    const card: Card = {
      value: 1,
      suit: 'hearts',
      display: 'A',
      flipped: false
    };
    const state: AppState = {
      game: {
        status: 'started',
        previousCards: [],
        remainingCards: [], 
        currentCard: card,
        level:'easy'
      }
    }; 
    const store = mockStore(state);
    const wrapper = mount(<Main store={store} />);
    expect(wrapper.find(Message).length).toBe(1);
    expect(wrapper.find(PreviousCards).length).toBe(1);
    expect(wrapper.find(CurrentAndNext).length).toBe(1);
  });
});
