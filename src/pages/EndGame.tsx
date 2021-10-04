import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ReactComponent as CheckTrue } from "../img/check.svg";
import { ReactComponent as XFalseIcon } from "../img/x_false.svg";
import { ReactComponent as XCloseIcon } from "../img/x_close.svg";
import { ReactComponent as StarFullIcon } from "../img/star_full.svg";
import { ReactComponent as StarClearIcon } from "../img/star_clear.svg";
import { ReactComponent as AvatarIcon } from "../img/avatar.svg";

const EndGame = () => {
  const { answers, score, amount } = useTypedSelector((state) => state.game);
  const { restartGame } = useActions();
  const starsResult: number = Math.round((score / amount) * 10);
  const stars: number[] = Array.from(Array(10).keys());

  return (
    <div className="page">
      <div className="wrapper">
        <div className="container">
          <XCloseIcon className="close" onClick={() => restartGame()} />
          <div className="result">
            <p className="score">
              <AvatarIcon className="avatar" />
              <span>
                You scored <b>{score}</b>
                <span>/{amount}</span>
              </span>
            </p>
            <p className="stars">
              {stars.map((key) =>
                key < starsResult ? <StarFullIcon /> : <StarClearIcon />
              )}
            </p>
          </div>
          {answers.map((answer, key) =>
            answer.correctAnswer === answer.answer ? (
              <div className="answer answer_true">
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
              <div className="answer answer_false">
                <p
                  dangerouslySetInnerHTML={{
                    __html: answer.question,
                  }}
                />
                <span>
                  <XFalseIcon />
                </span>
              </div>
            )
          )}
          <button className="btn btn_restart" onClick={() => restartGame()}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
