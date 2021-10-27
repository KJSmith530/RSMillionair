import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const Main = ({
  nextQuestion,
  handleWrongAnswer,
  stages,
  currentQuestionId,
  disabled50AnswerIds,
  // disabledGambleAnswerIds,
  handleGambleClick,
}) => {
  const currentStage = stages[currentQuestionId];
  return (
    <div className="main">
      <Question question={currentStage.question} />
      <div className="main-seperate"></div>
      <div className="answer-block">
        {currentStage.answers.map((answer) => (
          <Answer
            isCorrect={answer.isCorrect}
            text={answer.text}
            key={answer.id}
            nextQuestion={nextQuestion}
            handleWrongAnswer={handleWrongAnswer}
            isDisabled={disabled50AnswerIds.includes(answer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
