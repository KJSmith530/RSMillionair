import React from "react";

const Main = ({ nextQuestion, resetQuestion }) => {
  return (
    <div className="main">
      <button onClick={nextQuestion}>Next</button>
      <button onClick={resetQuestion}>Lose</button>
    </div>
  );
};

export default Main;
