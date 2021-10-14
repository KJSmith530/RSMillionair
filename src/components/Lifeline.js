const Lifeline = ({ text, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Lifeline;
