// @flow

import React from 'react';
import PreviousCards from './index';
import { shallow, render, mount } from 'enzyme';
import { cardAclubs, cardAhearts } from '../../cards';
import PlayingCard from '../../components/PlayingCard';

describe('PreviousCards tests', () => {
  const previousCards = [cardAclubs, cardAhearts];
  it('Should be able to render previous cards card', () => {
    const wrapper = mount(<PreviousCards previousCards={previousCards} />);
    expect(wrapper.find(PlayingCard).length).toBe(2);    
  });
});
