import { useState } from "react";
import "./App.css";
import InProgress from "./components/InProgress";
import Results from "./components/Results";
import Start from "./components/Start";
import stages from "./stages.json";

function App() {
  const [gameState, setGameState] = useState("START");
  const startGame = () => {
    setGameState("IN_PROGRESS");
  };
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const nextQuestion = () => {
    setCurrentQuestionId(currentQuestionId + 1);
  };
  const [winnings, setWinnings] = useState(0);
  const handleWrongAnswer = () => {
    if (currentQuestionId === 0) {
      setWinnings(0);
    } else {
      for (let i = currentQuestionId - 1; i >= 0; i--) {
        if (stages[i].checkpoint) {
          setWinnings(stages[i].amount);
          break;
        }
      }
    }
    setGameState("RESULTS");
  };
  const handleWalkAway = () => {
    if (currentQuestionId === 0) {
      setWinnings(0);
    } else {
      setWinnings(stages[currentQuestionId - 1].amount);
    }
    setGameState("RESULTS");
  };
  const handlePlayAgain = () => {
    setCurrentQuestionId(0);
    setIsPmButtonDisabled(false);
    setIs50ButtonDisabled(false);
    setIsGambleButtonDisabled(false);
    setWinnings(0);
    setGameState("START");
  };
  const [isPmButtonDisabled, setIsPmButtonDisabled] = useState(false);
  const handlePmClick = () => {
    setIsPmButtonDisabled(true);
  };
  const [is50ButtonDisabled, setIs50ButtonDisabled] = useState(false);
  const handle50Click = () => {
    setIs50ButtonDisabled(true);
  };
  const [isGambleButtonDisabled, setIsGambleButtonDisabled] = useState(false);
  const handleGambleClick = () => {
    setIsGambleButtonDisabled(true);
  };
  switch (gameState) {
    case "START":
      return <Start startGame={startGame} />;
    case "IN_PROGRESS":
      return (
        <InProgress
          stages={stages}
          currentQuestionId={currentQuestionId}
          nextQuestion={nextQuestion}
          handleWrongAnswer={handleWrongAnswer}
          handleWalkAway={handleWalkAway}
          isPmButtonDisabled={isPmButtonDisabled}
          handlePmClick={handlePmClick}
          is50ButtonDisabled={is50ButtonDisabled}
          handle50Click={handle50Click}
          isGambleButtonDisabled={isGambleButtonDisabled}
          handleGambleClick={handleGambleClick}
        />
      );
    case "RESULTS":
      return (
        <Results
          stages={stages}
          currentQuestionId={currentQuestionId}
          handlePlayAgain={handlePlayAgain}
          winnings={winnings}
        />
      );
    default:
      return null;
  }
}

export default App;
