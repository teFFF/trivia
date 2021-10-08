import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ReactComponent as Logo } from "../img/logo.svg";
import Button from "../components/Button";
import Amount from "../components/Amount";
import Difficulty from "../components/Difficulty";
import Page from "../components/Page";

const StartGame = () => {
  const { difficulty, amount } = useTypedSelector((state) => state.game);
  const { fetchQuestions } = useActions();

  return (
    <Page pageWhite={false}>
      <h1>Welcome to the</h1>
      <Logo className="logo" />
      <Difficulty difficulty={difficulty} />
      <Amount amount={amount} />
      <Button
        className="btn btn__full"
        text="Start"
        onClick={() => fetchQuestions(difficulty, amount)}
      />
    </Page>
  );
};

export default StartGame;
