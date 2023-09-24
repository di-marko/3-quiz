import React from "react";

function Game({ step, question, onClickAnswer, totalQuestions }) {
  const percent = Math.round((step / totalQuestions) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.question}</h1>
      <ul>
        {question.answers.map((choice, index) => (
          <li onClick={() => onClickAnswer(index)} key={choice}>
            {choice}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
