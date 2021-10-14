const Results = ({ winnings, handlePlayAgain }) => {
  return (
    <div>
      <h1>You Win:{winnings}</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Results;
