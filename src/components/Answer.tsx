import React from "react";
import { AnswerType } from "../types/types";
import { ReactComponent as CheckTrue } from "../img/check.svg";
import { ReactComponent as XFalseIcon } from "../img/x_false.svg";

interface Props {
  answer: AnswerType;
  key: number;
}

const Answer: React.FC<Props> = ({ answer, key }) => {
  return (
    <>
      {answer.correctAnswer === answer.answer ? (
        <div className="answer answer__true">
          <p
            key={key}
            dangerouslySetInnerHTML={{
              __html: answer.question,
            }}
          />
          <span>
            <CheckTrue />
          </span>
        </div>
      ) : (
        <div className="answer answer__false">
          <p
            dangerouslySetInnerHTML={{
              __html: answer.question,
            }}
          />
          <span>
            <XFalseIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default Answer;
