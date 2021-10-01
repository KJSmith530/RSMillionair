import classNames from "classnames";

const MoneyAmount = ({ amount, isActive, isCheckpoint }) => {
  return (
    <li
      className={classNames("amount", {
        active: isActive,
        checkpoint: isCheckpoint,
      })}
    >
      {amount}
    </li>
  );
};

export default MoneyAmount;

//  <ul className="amount">
//       <li>10,000,000 gp</li>
//       <li>5,000,000 gp</li>
//       <li>2,500,000 gp</li>
//       <li>1,000,000 gp</li>
//       <li>500,000 gp</li>
//       <li>100,000 gp</li>
//       <li>50,000 gp</li>
//       <li>10,000 gp</li>
//       <li>5,000 gp</li>
//       <li>1,000 gp</li>
//       <li>100 gp</li>
//       <li>1 gp</li>
//     </ul>
