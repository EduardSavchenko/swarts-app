import { NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="header">
      <nav className="">
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
            <NavLink to="/not-found"> Not Found </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { MainMenu };
