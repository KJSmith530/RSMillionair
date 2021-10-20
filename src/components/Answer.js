const Answer = ({
  text,
  isCorrect,
  nextQuestion,
  handleWrongAnswer,
  isDisabled,
}) => {
  function handleClick() {
    if (isCorrect) {
      nextQuestion();
    } else {
      handleWrongAnswer();
    }
  }
  return (
    <button className="answer-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Answer;
