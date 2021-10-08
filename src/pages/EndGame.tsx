import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ReactComponent as XCloseIcon } from "../img/x_close.svg";
import Button from "../components/Button";
import Page from "../components/Page";
import Result from "../components/Result";
import Answer from "../components/Answer";

const EndGame = () => {
  const { answers, score, amount } = useTypedSelector((state) => state.game);
  const { restartGame } = useActions();

  return (
    <Page pageWhite={false}>
      <Result score={score} amount={amount} onClick={() => restartGame()} />
      {answers.map((answer, key) => (
        <Answer answer={answer} key={key} />
      ))}
      <Button
        className="btn btn__full btn__full-restart"
        text="Play Again"
        onClick={() => restartGame()}
      />
    </Page>
  );
};

export default EndGame;
