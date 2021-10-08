import React from "react";
import { useActions } from "../hooks/useActions";
import LabelTitle from "./LabelTitle";
import { Icon } from "../types/types";

interface Props {
  difficulty: string;
}

const Difficulty: React.FC<Props> = ({ difficulty }) => {
  const { setDifficulty } = useActions();

  const difficultyHandler = (e: string) => {
    setDifficulty(e);
  };

  return (
    <div className="label">
      <LabelTitle htmlFor="difficulty" icon={Icon.CupIcon} text="Difficulty" />
      <select
        id="difficulty"
        className="label__select"
        value={difficulty}
        onChange={(e) => difficultyHandler(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default Difficulty;
