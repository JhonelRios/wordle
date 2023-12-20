import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import EndingBanner from '../EndingBanner/EndingBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleAddGuess = guess => {
    setGuesses(g => [...g, guess]);
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input addGuess={handleAddGuess} />
      <EndingBanner guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
