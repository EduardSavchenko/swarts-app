import { NavLink } from "react-router-dom";
import ButtonFavoriteLink from "../../components/PeoplePage/ButtonFavoriteLink";

const MainMenu = () => {
  return (
    <div className="header">
      <nav className="menu-wrapper">
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/people/?page=1"> People </NavLink>
          </li>
          <li>
            <NavLink to="/people-infinity/"> People Infinity </NavLink>
          </li>
          <li>
            <NavLink to="/filter-char-by-film/"> Filter Char By Film</NavLink>
          </li>
          <li>
            <NavLink to="/not-found"> Not Found </NavLink>
          </li>
        </ul>
        <ButtonFavoriteLink />
      </nav>
    </div>
  );
};

export { MainMenu };
