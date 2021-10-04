import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Game = () => {
  const { questions, error, loading, currentQuestionIndex, amount } =
    useTypedSelector((state) => state.game);
  const { setAnswer } = useActions();

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  if (error) {
    return <h1 className="loading error">{error}</h1>;
  }

  return (
    <div className="page page_white">
      <div className="wrapper">
        <div className="container">
          <h1>
            Entertainment:
            <br />
            Videogames
          </h1>
          <p className="level">level {currentQuestionIndex + 1}</p>
          {/*<p>score = {score}</p>*/}
          <div className="wrapper_progress">
            <p>
              <span> {currentQuestionIndex} </span> / {amount}
            </p>
            <div className="progress">
              <div
                className="progress_value"
                style={{
                  width: `${Math.round(
                    (currentQuestionIndex / amount) * 100
                  )}%`,
                }}
              />
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: questions[currentQuestionIndex].question,
            }}
            className="question"
          />
          <button className="btn_true" onClick={() => setAnswer("True")}>
            true
          </button>
          <button onClick={() => setAnswer("False")}>false</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
