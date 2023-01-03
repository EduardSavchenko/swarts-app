import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setToFavorite, removeFromFavorite } from "../../../store/action";
import favoriteno from "./img/favoriteno.svg";
import favoriteyes from "./img/favoriteyes.svg";
const PersonPhoto = ({
  personImg,
  personName,
  personid,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removeFromFavorite(personid));
      setPersonFavorite(false);
    } else {
      dispatch(
        setToFavorite({
          personid,
          personName,
          personImg,
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <>
      <div className="person-wrapper-img">
        <img className="person-img" src={personImg} alt={personName} />

        <img
          className="iconFavorite"
          onClick={dispatchFavoritePeople}
          src={personFavorite ? favoriteyes : favoriteno}
          alt="add to favorite"
        />
      </div>
    </>
  );
};
PersonPhoto.propTypes = {
  personImg: PropTypes.string,
  personid: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};
export { PersonPhoto };
