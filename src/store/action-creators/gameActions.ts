import { GameAction, GameActionTypes } from "../../types/types";
import { Dispatch } from "redux";
import axios from "axios";

export const setDifficulty = (difficulty: string) => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch({ type: GameActionTypes.SET_DIFFICULTY, payload: difficulty });
  };
};

export const setAmount = (amount: number) => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch({ type: GameActionTypes.SET_AMOUNT, payload: amount });
  };
};

export const fetchQuestions = (difficulty: string, amount: number) => {
  return async (dispatch: Dispatch<GameAction>) => {
    try {
      dispatch({ type: GameActionTypes.FETCH_QUESTIONS });
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
      );
      dispatch({
        type: GameActionTypes.FETCH_QUESTIONS_SUCCESS,
        payload: response.data.results,
      });
    } catch (e) {
      dispatch({
        type: GameActionTypes.FETCH_QUESTIONS_ERROR,
        payload: "Error loading questions",
      });
    }
  };
};

export const setAnswer = (answer: string) => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch({ type: GameActionTypes.SET_ANSWERS, payload: answer });
  };
};

export const restartGame = () => {
  return (dispatch: Dispatch<GameAction>) => {
    dispatch({ type: GameActionTypes.RESTART_GAME });
  };
};
