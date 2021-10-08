import React from "react";
import { ReactComponent as AvatarIcon } from "../img/avatar.svg";
import { ReactComponent as StarFullIcon } from "../img/star_full.svg";
import { ReactComponent as StarClearIcon } from "../img/star_clear.svg";
import { ReactComponent as XCloseIcon } from "../img/x_close.svg";

interface Props {
  score: number;
  amount: number;
  onClick: () => void;
}

const Result: React.FC<Props> = ({ score, amount, onClick }) => {
  const starsResult: number = Math.round((score / amount) * 10);
  const stars: number[] = Array.from(Array(10).keys());

  return (
    <div className="result">
      <XCloseIcon className="result__close" onClick={onClick} />
      <p className="result__score">
        <AvatarIcon className="result__avatar" />
        <span>
          You scored <b>{score}</b>
          <span>/{amount}</span>
        </span>
      </p>
      <p className="result__stars">
        {stars.map((key) =>
          key < starsResult ? (
            <StarFullIcon className="result__stars-icon" />
          ) : (
            <StarClearIcon className="result__stars-icon" />
          )
        )}
      </p>
    </div>
  );
};

export default Result;
