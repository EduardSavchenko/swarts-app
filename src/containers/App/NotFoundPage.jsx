import userEvent from "@testing-library/user-event";
import React from "react";
import { useLocation } from "react-router";
import img2 from "../../img/404.png";
import img from "../../img/jedi.png";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div className="notfound">
      <h1>404 NOT FOUND PAGE</h1>
      <p>No match for {location.pathname}</p>
      <img className="" src={img} alt="jedi" />
      <img className="" src={img2} alt="404" />
    </div>
  );
};

export { NotFoundPage };
