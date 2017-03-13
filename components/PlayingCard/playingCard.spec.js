// @flow

import React from 'react'; 
import PlayingCard from './index';
import { shallow, render, mount } from 'enzyme';
import {cardAclubs} from '../../cards'

describe('PlayingCard tests', () => {
  const card: Card = cardAclubs;

  it('Should be able to render card', () => {    
    const wrapper = mount(<PlayingCard card={card}/>);      
    expect(wrapper.find('div.card').length).toBe(1);
    expect(wrapper.find('.small').length).toBe(0);
    expect(wrapper.find('.showBack').length).toBe(1);
    expect(wrapper.find('figure.hearts')).toBeTruthy();         
  }); 

  it('Should be able to render card with front shown', () => {    
    let flippedCard: Card = Object.assign({}, card, {flipped:true});
    const wrapper = mount(<PlayingCard card={flippedCard}/>);       
    expect(wrapper.find('.showBack').length).toBe(0);  
    expect(wrapper.first('figure').text()).toBe('A');      
  }); 

  it('Should be able to render small card', () => {    
    const wrapper = mount(<PlayingCard card={card} small={true}/>);      
    expect(wrapper.find('.card.small').length).toBe(1);  
  }); 
});