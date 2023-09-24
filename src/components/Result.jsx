import React from "react";

function Result({ correct, totalQuestions }) {
  return (
    <div className="result">
      <div className="emoji-icon">👾</div>
      <h2>
        You guessed {correct} out of {totalQuestions}
      </h2>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );
}

export default Result;
