import Main from "./Main";
import Sidebar from "./Sidebar";

const InProgress = ({
  winnings,
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
  handleAnswerClick,
  answerSelected,
}) => {
  return (
    <>
      <div className="InProgress">
        <Main
          currentQuestionId={currentQuestionId}
          stages={stages}
          handle50Click={handle50Click}
          disabled50AnswerIds={disabled50AnswerIds}
          handleGambleClick={handleGambleClick}
          handleAnswerClick={handleAnswerClick}
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
      {answerSelected && <div className="answer-selected-overlay" />}
    </>
  );
};

export default InProgress;
