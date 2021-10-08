import React from "react";
import { ReactComponent as AmountIcon } from "../img/star_amount.svg";
import { ReactComponent as CupIcon } from "../img/cup.svg";
import { Icon } from "../types/types";

interface Props {
  htmlFor: string;
  icon: Icon;
  text: string;
}

const LabelTitle: React.FC<Props> = ({ htmlFor, icon, text }) => {
  return (
    <label htmlFor={htmlFor} className="label__title">
      {icon === Icon.AmountIcon ? (
        <AmountIcon className="label__icon" />
      ) : (
        <CupIcon className="label__icon" />
      )}
      <span>{text}</span>
    </label>
  );
};

export default LabelTitle;
