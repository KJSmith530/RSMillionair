import React from "react";
import MoneyAmount from "./MoneyAmount";

const Money = ({ stages, currentQuestionId }) => {
  return (
    <div className="money">
      <ul>
        {[...stages].reverse().map((stage) => (
          <MoneyAmount
            isActive={currentQuestionId === stage.id}
            key={stage.id}
            amount={stage.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default Money;
