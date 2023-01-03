import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonFavoriteAll from "./PeopleList/img/favorite-state.svg";
import { useEffect } from "react";

const ButtonFavoriteLink = () => {
  const [count, setCount] = useState(0);
  const arrToFavorite = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = arrToFavorite.length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });
  return (
    <div className="containter-favorite">
      <Link to="/favorite-page/">
        <span className="counter-current">{count}</span>
        <img src={ButtonFavoriteAll} alt="" className="icon-favorite" />
      </Link>
    </div>
  );
};

export default ButtonFavoriteLink;
