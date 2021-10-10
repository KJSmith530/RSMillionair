const Answer = ({ text, isCorrect, nextQuestion, resetQuestion }) => {
  function handleClick() {
    if (isCorrect) {
      nextQuestion();
    } else {
      resetQuestion();
    }
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default Answer;
