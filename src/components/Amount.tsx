import React, { ChangeEvent } from "react";
import { useActions } from "../hooks/useActions";
import LabelTitle from "./LabelTitle";
import { Icon } from "../types/types";

interface Props {
  amount: number;
}

const Amount: React.FC<Props> = ({ amount }) => {
  const { setAmount } = useActions();

  const amountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    setAmount(Math.max(Number(min), Math.min(Number(max), Number(value))));
  };

  return (
    <div className="label label__amount">
      <LabelTitle htmlFor="amount" icon={Icon.AmountIcon} text="Amount" />
      <input
        className="label__input"
        id="amount"
        min="10"
        max="50"
        type="number"
        value={amount}
        onChange={(e) => amountHandler(e)}
      />
    </div>
  );
};

export default Amount;
