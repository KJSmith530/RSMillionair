const Start = ({ startGame }) => {
  return (
    <div className="Start">
      <h1 className="title">RuneScape Millionaire</h1>
      <button className="start-button" onClick={startGame}>
        START
      </button>
    </div>
  );
};

export default Start;
