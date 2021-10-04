import React from "react";
import StartGamePage from "./StartGame";
import GamePage from "./Game";
import EndGamePage from "./EndGame";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { START_GAME, GAME, END_GAME } from "../utils/constants";

const MainPage = () => {
  const currentStage = useTypedSelector((state) => state.game.stage);

  let displayedPage;
  switch (currentStage) {
    case START_GAME:
      displayedPage = <StartGamePage />;
      break;
    case GAME:
      displayedPage = <GamePage />;
      break;
    case END_GAME:
      displayedPage = <EndGamePage />;
      break;
    default:
      break;
  }

  return <>{displayedPage}</>;
};

export default MainPage;
