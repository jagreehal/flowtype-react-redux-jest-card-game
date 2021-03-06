// @flow
import React from 'react';

type Props = {
  small?: boolean,
  card: Card
};

const Card = ({ card, small = false }: Props) => {
  const cardSuit = `ma0 front ${card.suit}`;
  const cardClass = 'card' +
    (card.flipped ? '' : ' showBack') +
    (small ? ' small' : '');

  const front = (
    <figure className={cardSuit}>
      <p>{card.display}</p>
    </figure>
  );
  const back = <figure className="ma0 back" />;

  return (
    <div className={cardClass}>
      {card.flipped ? front : back}
    </div>
  );
};

export default Card;
