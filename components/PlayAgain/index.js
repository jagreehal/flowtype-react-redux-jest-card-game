// @flow
import React from 'react';

export type Props = {
  reset: Dispatch
};

const StartGame = ({ reset }: Props) => {
  return (
    <div>
      <a className="f6 link ph6 ph7-ns pv4 white bg-blue" onClick={reset}><span className="right-pointing-triangle">&nbsp;</span> Play Again</a>      
    </div>
  );
};

export default StartGame;
