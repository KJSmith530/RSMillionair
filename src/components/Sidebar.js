import React from "react";
import Lifeline from "./Lifeline";
import MoneyAmount from "./MoneyAmount";
import Modal from "react-modal";

const Sidebar = ({
  stages,
  currentQuestionId,
  handlePmClick,
  isPmButtonDisabled,
  handle50Click,
  is50ButtonDisabled,
  handleGambleClick,
  isGambleButtonDisabled,
  handleWalkAway,
  modalIsOpen,
  leaveGame,
  closeModal,
}) => {
  return (
    <div className="money">
      <div>
        <Lifeline
          text="PM"
          onClick={handlePmClick}
          isDisabled={isPmButtonDisabled}
        />
        <Lifeline
          text="50/50"
          onClick={handle50Click}
          isDisabled={is50ButtonDisabled}
        />
        <Lifeline
          text="Gamble"
          onClick={handleGambleClick}
          isDisabled={isGambleButtonDisabled}
        />
      </div>
      <ul className="money-list">
        {[...stages].reverse().map((stage) => (
          <MoneyAmount
            isCheckpoint={stage.checkpoint}
            isActive={currentQuestionId === stage.id}
            key={stage.id}
            amount={stage.amount}
          />
        ))}
      </ul>
      <button className="walk-away" onClick={handleWalkAway}>
        H
      </button>
      <Modal isOpen={modalIsOpen} className="modal">
        <h1>Are You Sure?</h1>
        <button onClick={leaveGame}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>
    </div>
  );
};

export default Sidebar;
