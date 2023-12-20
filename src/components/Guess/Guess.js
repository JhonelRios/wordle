import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const lettersStatus = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map(idx => {
        const letter = guess ? guess[idx] : '';
        const cellStatus = guess
          ? lettersStatus.find(status => status.letter === letter)?.status
          : '';

        return (
          <span className={`cell ${cellStatus}`} key={idx}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
