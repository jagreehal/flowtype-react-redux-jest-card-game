// @flow
import React from 'react'; 
import PlayingCard from '../PlayingCard';

type Props = {
  currentCard: Card,
  remainingCards: $ReadOnlyArray<Card>
};

const CurrentAndNext = ({ currentCard, remainingCards }: Props) => {
  let currentCardComponent = <li className="dib"><PlayingCard card={currentCard} /></li>;  
  let nextCard;
  
  if (remainingCards.length){
    nextCard = <li className="dib"><PlayingCard card={remainingCards[0]} /></li>;    
  }

  return (
    <ul className="ph0 cards bt bb bw1 b--white pv3 flex justify-center mv3">
      <li className="dib"><PlayingCard card={currentCard} /></li>          
      {nextCard}
    </ul>    
  );
};

export default CurrentAndNext;
