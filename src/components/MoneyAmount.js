import classNames from "classnames";

const MoneyAmount = ({ amount, isActive, isCheckpoint }) => {
  return (
    <li
      className={classNames("amount", {
        active: isActive,
        checkpoint: isCheckpoint,
      })}
    >
      {amount} gp
    </li>
  );
};

export default MoneyAmount;
