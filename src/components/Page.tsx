import React from "react";

interface Props {
  pageWhite: boolean;
}

const Page: React.FC<Props> = ({ pageWhite, children }) => {
  return (
    <>
      <div className={`page ${pageWhite ? "page__white" : ""}`}>
        <div className="wrapper">
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
