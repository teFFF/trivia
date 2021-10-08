import React from "react";

interface Props {
  error: string;
  className: string;
}

const Error: React.FC<Props> = ({ error, className }) => {
  return <h1 className={className}>{error}</h1>;
};

export default Error;
