// @flow

import React from 'react';
import Message from './index';
import { mount } from 'enzyme';
import { cardAclubs, cardAhearts } from '../../cards';

describe('Message tests', () => {
  let previousCards = [cardAclubs];
  let remainingCards = [cardAhearts];

  it('Should display winner message', () => {
    let status = 'won';    

    const wrapper = mount(
      <Message
        status={status}
        previousCards={previousCards}
        remainingCards={remainingCards}
      />
    );

    expect(wrapper.text()).toBe('WINNER - You guessed all 3 cards');
  });

  it('Should display lost message', () => {
    let status = 'lost';

    const wrapper = mount(
      <Message
        status={status}
        previousCards={previousCards}
        remainingCards={remainingCards}
      />
    );

    expect(wrapper.text()).toBe('OH NO! - You guessed 2 / 3 cards');
  });

  it('Should default message', () => {
    let status = 'started';

    const wrapper = mount(
      <Message
        status={status}
        previousCards={previousCards}
        remainingCards={remainingCards}
      />
    );

    expect(wrapper.text()).toBe('Cards Played: 2 / 3');
  });  
});
