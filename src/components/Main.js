import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const Main = ({
  nextQuestion,
  handleWrongAnswer,
  stages,
  currentQuestionId,
  is50Active,
}) => {
  const currentStage = stages[currentQuestionId];
  return (
    <div className="main">
      <Question question={currentStage.question} />
      <div className="answer-block">
        {currentStage.answers.map((answer) => (
          <Answer
            isCorrect={answer.isCorrect}
            text={answer.text}
            key={answer.id}
            nextQuestion={nextQuestion}
            handleWrongAnswer={handleWrongAnswer}
            isDisabled={is50Active}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
