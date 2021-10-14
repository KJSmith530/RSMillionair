import React from "react";
import Lifeline from "./Lifeline";
import MoneyAmount from "./MoneyAmount";

const Sidebar = ({
  stages,
  currentQuestionId,
  handlePmClick,
  isPmButtonDisabled,
  handle50Click,
  is50ButtonDisabled,
  handleGambleClick,
  isGambleButtonDisabled,
}) => {
  return (
    <div className="money">
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
      <ul>
        {[...stages].reverse().map((stage) => (
          <MoneyAmount
            isCheckpoint={stage.checkpoint}
            isActive={currentQuestionId === stage.id}
            key={stage.id}
            amount={stage.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
