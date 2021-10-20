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
  is50Active,
  handleGambleClick,
  isGambleButtonDisabled,
}) => {
  return (
    <div className="InProgress">
      <Main
        nextQuestion={nextQuestion}
        handleWrongAnswer={handleWrongAnswer}
        currentQuestionId={currentQuestionId}
        stages={stages}
        handle50Click={handle50Click}
        is50Active={is50Active}
      />

      <Sidebar
        currentQuestionId={currentQuestionId}
        stages={stages}
        handleWalkAway={handleWalkAway}
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
