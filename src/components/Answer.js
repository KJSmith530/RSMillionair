const Answer = ({ text, isCorrect, nextQuestion, handleWrongAnswer }) => {
  function handleClick() {
    if (isCorrect) {
      nextQuestion();
    } else {
      handleWrongAnswer();
    }
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default Answer;
