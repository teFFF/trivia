import { GameAction, GameActionTypes, GameState } from "../../types/types";
import { END_GAME, GAME, START_GAME } from "../../utils/constants";

const initialState: GameState = {
  stage: START_GAME,
  difficulty: "easy",
  amount: 10,
  questions: [],
  loading: false,
  error: null,
  score: 0,
  currentQuestionIndex: 0,
  answers: [],
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionTypes.SET_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case GameActionTypes.SET_AMOUNT:
      return { ...state, amount: action.payload };
    case GameActionTypes.SET_STAGE:
      return { ...state, stage: action.payload };
    case GameActionTypes.FETCH_QUESTIONS:
      return { ...state, loading: true, stage: GAME };
    case GameActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };
    case GameActionTypes.FETCH_QUESTIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GameActionTypes.SET_ANSWERS: {
      const localCurrentQuestionIndex: number = state.currentQuestionIndex;
      const currentQuestion = state.questions[localCurrentQuestionIndex];
      const localStage =
        localCurrentQuestionIndex + 1 === state.amount ? END_GAME : GAME;
      let localScore: number =
        action.payload === currentQuestion.correct_answer ? 1 : 0;
      localScore += state.score;
      let answers = state.answers;
      answers.push({
        question: currentQuestion.question,
        answer: action.payload,
        correctAnswer: currentQuestion.correct_answer
      });
      return {
        ...state,
        answers: answers,
        score: localScore,
        currentQuestionIndex: localCurrentQuestionIndex + 1,
        stage: localStage,
      };
    }
    case GameActionTypes.RESTART_GAME:
      return {
        ...state,
        stage: START_GAME,
        difficulty: "easy",
        amount: 10,
        questions: [],
        loading: false,
        error: null,
        score: 0,
        currentQuestionIndex: 0,
        answers: [],
      };
    default:
      return state;
  }
};
