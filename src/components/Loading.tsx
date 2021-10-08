import React from "react";

interface Props {
  className: string;
}

const Loading: React.FC<Props> = ({ className }) => {
  return <h1 className={className}>Loading...</h1>;
};

export default Loading;
