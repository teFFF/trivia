import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Button from "../components/Button";
import Page from "../components/Page";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Level from "../components/Level";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Game = () => {
  const { questions, error, loading, currentQuestionIndex, amount } =
    useTypedSelector((state) => state.game);
  const { setAnswer } = useActions();

  if (loading) {
    return <Loading className="loading" />;
  }
  if (error) {
    return <Error error={error} className="loading error" />;
  }

  return (
    <Page pageWhite={true}>
      <h1>
        Entertainment:
        <br />
        Videogames
      </h1>
      <Level level={currentQuestionIndex + 1} className="level" />
      <Progress currentQuestionIndex={currentQuestionIndex} amount={amount} />
      <Question
        question={questions[currentQuestionIndex].question}
        className="question"
      />
      <Button
        className="btn btn__true"
        text="True"
        onClick={() => setAnswer("True")}
      />
      <Button className="btn" text="False" onClick={() => setAnswer("False")} />
    </Page>
  );
};

export default Game;
