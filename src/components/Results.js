const Results = ({ winnings, handlePlayAgain }) => {
  return (
    <div className="Results">
      <h1>You Win:{winnings}</h1>
      <button onClick={handlePlayAgain} className="results-button">
        Play Again
      </button>
    </div>
  );
};

export default Results;
