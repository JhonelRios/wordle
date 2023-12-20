import React from 'react';

function WinBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function EndingBanner({ guesses, answer }) {
  const userWin = guesses.at(-1) === answer;

  return (
    <>
      {userWin ? (
        <WinBanner guesses={guesses} />
      ) : (
        guesses.length === 6 && <LoseBanner answer={answer} />
      )}
    </>
  );
}

export default EndingBanner;
