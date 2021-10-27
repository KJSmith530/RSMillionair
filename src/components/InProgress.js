import Main from "./Main";
import Sidebar from "./Sidebar";

const InProgress = ({
  nextQuestion,
  winnings,
  handleWrongAnswer,
  handleWalkAway,
  currentQuestionId,
  stages,
  handlePmClick,
  isPmButtonDisabled,
  handle50Click,
  is50ButtonDisabled,
  disabled50AnswerIds,
  handleGambleClick,
  isGambleButtonDisabled,
  modalIsOpen,
  closeModal,
  leaveGame,
  // disabledGambleAnswerIds,
}) => {
  return (
    <div className="InProgress">
      <Main
        nextQuestion={nextQuestion}
        handleWrongAnswer={handleWrongAnswer}
        currentQuestionId={currentQuestionId}
        stages={stages}
        handle50Click={handle50Click}
        disabled50AnswerIds={disabled50AnswerIds}
        handleGambleClick={handleGambleClick}
        // disabledGambleAnswerIds={disabledGambleAnswerIds}
      />

      <Sidebar
        winnings={winnings}
        currentQuestionId={currentQuestionId}
        stages={stages}
        handleWalkAway={handleWalkAway}
        handlePmClick={handlePmClick}
        isPmButtonDisabled={isPmButtonDisabled}
        handle50Click={handle50Click}
        is50ButtonDisabled={is50ButtonDisabled}
        handleGambleClick={handleGambleClick}
        isGambleButtonDisabled={isGambleButtonDisabled}
        modalIsOpen={modalIsOpen}
        leaveGame={leaveGame}
        closeModal={closeModal}
      />
    </div>
  );
};

export default InProgress;
