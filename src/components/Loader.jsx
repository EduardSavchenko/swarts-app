import React from "react";
import loader from "./spinner.svg";
import loaderBlue from "./spinner-blue.svg";
import loaderBlack from "./spinner-black.svg";
import { useState } from "react";
import { useEffect } from "react";

const Loader = ({ theme = "white" }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      case "white":
        setLoaderIcon(loader);
        break;
      default:
        setLoaderIcon(loader);
    }
  }, []);

  return (
    <>
      <img className="loader" src={loaderIcon} alt="loader" />
    </>
  );
};

export { Loader };
