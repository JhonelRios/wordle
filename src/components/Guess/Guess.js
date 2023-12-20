import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map(idx => (
        <span className="cell" key={idx}>
          {guess ? guess[idx] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
