import React, { useState } from 'react';

function Input({ addGuess }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ answer: guess });
    addGuess(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        maxLength="5"
      />
    </form>
  );
}

export default Input;
