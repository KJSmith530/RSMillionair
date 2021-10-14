import Main from "./Main";
import Sidebar from "./Sidebar";

const InProgress = ({
  nextQuestion,
  handleWrongAnswer,
  handleWalkAway,
  currentQuestionId,
  stages,
  handlePmClick,
  isPmButtonDisabled,
  handle50Click,
  is50ButtonDisabled,
  handleGambleClick,
  isGambleButtonDisabled,
}) => {
  return (
    <div className="InProgress">
      <Main
        nextQuestion={nextQuestion}
        handleWrongAnswer={handleWrongAnswer}
        handleWalkAway={handleWalkAway}
        currentQuestionId={currentQuestionId}
        stages={stages}
      />

      <Sidebar
        currentQuestionId={currentQuestionId}
        stages={stages}
        handlePmClick={handlePmClick}
        isPmButtonDisabled={isPmButtonDisabled}
        handle50Click={handle50Click}
        is50ButtonDisabled={is50ButtonDisabled}
        handleGambleClick={handleGambleClick}
        isGambleButtonDisabled={isGambleButtonDisabled}
      />
    </div>
  );
};

export default InProgress;
