import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const Main = ({ nextQuestion, resetQuestion, stages, currentQuestionId }) => {
  const currentStage = stages[currentQuestionId];
  return (
    <div className="main">
      <Question question={currentStage.question} />
      {currentStage.answers.map((answer) => (
        <Answer
          isCorrect={answer.isCorrect}
          text={answer.text}
          key={answer.id}
          nextQuestion={nextQuestion}
          resetQuestion={resetQuestion}
        />
      ))}
    </div>
  );
};

export default Main;
