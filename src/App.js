import Main from "./components/Main";
import Money from "./components/Money";
import stages from "./stages.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const nextQuestion = () => {
    setCurrentQuestionId(currentQuestionId + 1);
  };
  const resetQuestion = () => {
    setCurrentQuestionId(0);
  };
  return (
    <div className="app">
      <Main nextQuestion={nextQuestion} resetQuestion={resetQuestion} />

      <Money currentQuestionId={currentQuestionId} stages={stages} />
    </div>
  );
}

export default App;
