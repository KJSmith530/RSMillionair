import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const Main = ({
  stages,
  currentQuestionId,
  disabled50AnswerIds,
  handleAnswerClick,
}) => {
  const currentStage = stages[currentQuestionId];
  return (
    <div className="main">
      <Question question={currentStage.question} />
      <div className="main-seperate"></div>
      <div className="answer-block">
        {currentStage.answers.map((answer) => {
          function handleClick() {
            handleAnswerClick(answer.id, answer.isCorrect);
          }
          return (
            <Answer
              handleClick={handleClick}
              text={answer.text}
              key={answer.id}
              isDisabled={disabled50AnswerIds.includes(answer.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
