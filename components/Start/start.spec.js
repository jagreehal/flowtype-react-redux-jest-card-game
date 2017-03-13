// @flow

import React from 'react';
import StartButton from './index';
import { mount } from 'enzyme';

describe('Start tests', () => {
  
  it('Will call startGame action on click', () => {
    let startGame = jest.fn();
    const wrapper = mount(<StartButton startGame={startGame} />);
    wrapper.find('#easy').simulate('click');
    expect(startGame.mock.calls[0][0]).toBe('easy')      
  });

  it('Will call startGame action on click', () => {
    let startGame = jest.fn();
    const wrapper = mount(<StartButton startGame={startGame} />);
    wrapper.find('#hard').simulate('click');
    expect(startGame.mock.calls[0][0]).toBe('hard')      
  });
});
