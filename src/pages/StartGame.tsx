import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cup } from "../img/cup.svg";
import { ReactComponent as Amount } from "../img/star_amount.svg";

const StartGame = () => {
  const { difficulty, amount } = useTypedSelector((state) => state.game);
  const { setDifficulty, setAmount, fetchQuestions } = useActions();

  const difficultyHandler = (e: any) => {
    setDifficulty(e);
  };

  const amountHandler = (e: any) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setAmount(Number(value));
  };

  return (
    <div className="page">
      <div className="wrapper">
        <div className="container">
          <h1>Welcome to the</h1>
          <Logo className="logo" />
          <div className="label">
            <label htmlFor="difficulty">
              <Cup className="difficulty" />
              <span>Difficulty</span>
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => difficultyHandler(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="label amount_label">
            <label htmlFor="amount">
              <Amount className="amount" />
              <span>Amount</span>
            </label>
            <input
              id="amount"
              min="10"
              max="50"
              type="number"
              value={amount}
              onChange={(e) => amountHandler(e)}
            />
          </div>
          <button
            className="btn"
            onClick={() => fetchQuestions(difficulty, amount)}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
