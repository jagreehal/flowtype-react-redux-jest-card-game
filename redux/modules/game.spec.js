// @flow
import reducer, { actions, initialState } from './game';
import { cardAhearts, card2hearts, card3hearts } from '../../cards';

describe('Game reducer', () => {
  it('can start game', () => {
    let result = reducer(initialState, { type: 'START_GAME', level:'easy' });
    if (result.status === 'notStarted') {
      expect(result.status).toBe('started');
      return false;
    }

    expect(result.previousCards.length).toBe(0);
    expect(result.remainingCards.length).toBeTruthy();
    expect(result.currentCard).toBeTruthy();
  });

  it('can play ok to win', () => {
    let card1 = cardAhearts;
    let card2 = card2hearts;
 
    let gameState: GameState = {
      previousCards: [],
      currentCard: card1,
      remainingCards: [card2],
      status: 'started',
      level:'easy'
    };

    let result = reducer(gameState, actions.guess('high')); 
    if (result.status === 'notStarted') {
      expect(result.status).toBe('started');
      return false;
    }

    let remainingCard = result.remainingCards[0];

    expect(result.previousCards.length).toBe(0);
    expect(remainingCard.value).toBe(2);
    expect(remainingCard.flipped).toBeTruthy();
    expect(result.currentCard.value).toBe(1);
    expect(result.status).toBe('won');
  });

  it('can play mid game', () => {
    let card1 = cardAhearts;
    let card2 = card2hearts;
    let card3 = card3hearts;

    let gameState: GameState = {
      previousCards: [],
      currentCard: card1,
      remainingCards: [card2, card3],
      status: 'started',
      level:'easy'
    };

    let result = reducer(gameState, actions.guess('high'));

    if (result.status === 'notStarted') {
      expect(result.status).toBe('started');
      return false;
    }

    expect(result.previousCards.length).toBe(1);
    expect(result.remainingCards.length).toBe(1);
    expect(result.currentCard.value).toBe(2);
    expect(result.status).toBe('started');
  });

  it('can play bad card', () => {
    let card1 = cardAhearts;
    let card2 = card2hearts;
    let card3 = card3hearts;

    let gameState: GameState = {
      previousCards: [],
      currentCard: card1,
      remainingCards: [card2],
      status: 'started',
      level:'easy'
    };

    let result = reducer(gameState, actions.guess('low'));
    if (result.status === 'notStarted') {
      expect(result.status).toBe('started');
      return false;
    }
    expect(result.previousCards.length).toBe(0);
    expect(result.remainingCards.length).toBe(1);
    expect(result.currentCard ? result.currentCard.value : null).toBe(1);
    expect(result.status).toBe('lost');
  });
});
