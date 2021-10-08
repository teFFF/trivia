import React from "react";

interface Props {
  level: number;
  className: string;
}

const Level: React.FC<Props> = ({ level, className }) => {
  return (
    <>
      <p className={className}>level {level}</p>
    </>
  );
};

export default Level;
