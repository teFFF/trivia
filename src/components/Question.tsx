import React from "react";

interface Props {
  question: string;
  className: string;
}

const Question: React.FC<Props> = ({ question, className }) => {
  return (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: question,
        }}
        className={className}
      />
    </>
  );
};

export default Question;
