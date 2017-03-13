// @flow

import type { Store as StoreType, Dispatch as DispatchType } from 'redux';

export type Card = {    
  +value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
  +display: | 'A'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'J'
    | 'Q'
    | 'K',
    +suit: 'diamonds' | 'hearts' | 'clubs' | 'spades',
    +flipped: boolean
};

export type Level = 'easy' | 'hard'

export type Cards = {
  previousCards: $ReadOnlyArray<Card>,
  +currentCard: Card,
  remainingCards: $ReadOnlyArray<Card>  
};

export type PlayingGameStatus = 'started' | 'won' | 'lost';

export type GameState = {| +status: 'notStarted' |}
  | { +status: PlayingGameStatus, +level: Level } & Cards;

export type AppState = {
  +game: GameState
};

export type Guess = 'high' | 'low';

export type GameAction =
  | {| type: 'START_GAME', level: Level |}
  | {| type: 'GUESS', +guess: Guess |}
  | {| type: 'RESET_GAME' |};

export type Store = StoreType<AppState>;

export type Dispatch = DispatchType<GameAction>;
