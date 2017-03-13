// @flow

import { cards, getShuffledCardsForGame } from '../../cards';

export const initialState: GameState = {
  status: 'notStarted'
};

export const actions = {
  guess: (guess: Guess): GameAction => ({ type: 'GUESS', guess }),
  start: (level: Level = 'easy'): GameAction => ({ type: 'START_GAME', level }),
  reset: (): GameAction => ({ type: 'RESET_GAME' })
};

export default function reducer(
  state: GameState = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        status: 'notStarted'
      };

    case 'START_GAME':
      let cardsForGame: $ReadOnlyArray<Card>;
      let level: Level = action.level;
      switch (level) {
        case 'hard':
          cardsForGame = getShuffledCardsForGame(cards);
          break;
        default:
          cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
          break;
      }

      return {
        status: 'started',
        previousCards: [],
        currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
        remainingCards: cardsForGame.slice(1),
        level
      };

    case 'GUESS':
      if (!state.status === 'notStarted' || !state.remainingCards) {
        return state;
      }

      if (!state.remainingCards.length) {
        return Object.assign({}, state, {
          status: 'won',
          hasWon: true
        });
      }

      let nextCard = Object.assign({}, state.remainingCards[0], {
        flipped: true
      });
      let nextRemainingCards = state.remainingCards.slice(1);
      // flip the next card

      let guessIsOK = false;
      if (action.guess === 'high') {
        guessIsOK = nextCard.value > state.currentCard.value;
      } else {
        guessIsOK = state.currentCard.value > nextCard.value;
      }

      if (!guessIsOK) {
        return Object.assign({}, state, {
          remainingCards: [nextCard].concat(nextRemainingCards),
          status: 'lost'
        });
      }

      let hasWon = nextRemainingCards.length === 0 ? true : undefined;

      if (hasWon) {
        return Object.assign({}, state, {
          remainingCards: [nextCard],
          status: 'won'
        });
      }

      return Object.assign({}, state, {
        previousCards: state.previousCards.concat(state.currentCard),
        currentCard: nextCard,
        remainingCards: nextRemainingCards
      });

    default:
      return state;
  }
}
