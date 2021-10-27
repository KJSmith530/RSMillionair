const Lifeline = ({ text, onClick, isDisabled }) => {
  return (
    <button className="lifeline" onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Lifeline;
