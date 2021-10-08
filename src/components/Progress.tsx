import React from "react";

interface Props {
  currentQuestionIndex: number;
  amount: number;
}

const Progress: React.FC<Props> = ({ currentQuestionIndex, amount }) => {
  return (
    <div className="progress">
      <p>
        <span> {currentQuestionIndex} </span> / {amount}
      </p>
      <div className="progress__bar">
        <div
          className="progress__value"
          style={{
            width: `${Math.round((currentQuestionIndex / amount) * 100)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
