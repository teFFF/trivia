interface Question {
  question: string;
  correct_answer: string;
}

export interface AnswerType {
  answer: string;
  correctAnswer: string;
  question: string;
}

export interface GameState {
  stage: string;
  difficulty: string;
  amount: number;
  questions: Question[];
  loading: boolean;
  error: null | string;
  score: number;
  currentQuestionIndex: number;
  answers: AnswerType[];
}

export enum Icon {
  AmountIcon = "AmountIcon",
  CupIcon = "CupIcon",
}

export enum GameActionTypes {
  SET_DIFFICULTY = "SET_DIFFICULTY",
  SET_AMOUNT = "SET_AMOUNT",
  SET_STAGE = "SET_STAGE",
  FETCH_QUESTIONS = "FETCH_QUESTIONS",
  FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_FETCH_USERS_ERROR",
  SET_ANSWERS = "SET_ANSWERS",
  RESTART_GAME = "RESTART_GAME",
}

interface SetDifficultyAction {
  type: GameActionTypes.SET_DIFFICULTY;
  payload: string;
}

interface SetAmountAction {
  type: GameActionTypes.SET_AMOUNT;
  payload: number;
}

interface SetStageAction {
  type: GameActionTypes.SET_STAGE;
  payload: string;
}

interface FetchQuestionsAction {
  type: GameActionTypes.FETCH_QUESTIONS;
}

interface FetchQuestionsSuccessAction {
  type: GameActionTypes.FETCH_QUESTIONS_SUCCESS;
  payload: Question[];
}

interface FetchQuestionsErrorAction {
  type: GameActionTypes.FETCH_QUESTIONS_ERROR;
  payload: string;
}

interface SetAnswersAction {
  type: GameActionTypes.SET_ANSWERS;
  payload: string;
}

interface RestartGameAction {
  type: GameActionTypes.RESTART_GAME;
}

export type GameAction =
  | RestartGameAction
  | SetStageAction
  | SetAnswersAction
  | SetDifficultyAction
  | SetAmountAction
  | FetchQuestionsAction
  | FetchQuestionsErrorAction
  | FetchQuestionsSuccessAction;
