import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import questions from "./questions.json";
import "./index.scss";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions.questions[step];
  const totalQuestions = questions.questions.length;

  const onClickAnswer = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.questions.length ? (
        <Game
          step={step}
          question={question}
          onClickAnswer={onClickAnswer}
          totalQuestions={totalQuestions}
        />
      ) : (
        <Result correct={correct} totalQuestions={questions.questions.length} />
      )}
    </div>
  );
}

export default App;
