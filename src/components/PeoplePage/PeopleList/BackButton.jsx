import React from "react";
import { useNavigate } from "react-router";
const BackButton = () => {
  const goto = useNavigate();
  const goBack = () => {
    goto(-1);
  };
  return (
    <>
      <button onClick={goBack}>GO TO BACK</button>
    </>
  );
};

export { BackButton };
