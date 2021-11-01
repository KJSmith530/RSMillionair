const Answer = ({ text, isDisabled, handleClick }) => {
  return (
    <button
      disabled={isDisabled}
      className="answer-button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Answer;
