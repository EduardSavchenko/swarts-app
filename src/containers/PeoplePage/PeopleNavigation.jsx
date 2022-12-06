import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PeopleNavigation = ({
  getResourse,
  previousPage,
  nextPage,
  counterPage,
}) => {
  const handleChangePrev = () => getResourse(nextPage);
  const handleChangeNext = () => getResourse(previousPage);
  return (
    <div className="navbarnavigation">
      <Link to={`/people/?page=${counterPage - 1}`} className="linkbutton">
        <button
          onClickCapture={handleChangePrev}
          disabled={!previousPage}
          className="navbutton"
        >
          Previous
        </button>
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className="linkbutton">
        <button
          onClickCapture={handleChangeNext}
          disabled={!nextPage}
          className="navbutton"
        >
          Next
        </button>
      </Link>
    </div>
  );
};
PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};
export { PeopleNavigation };
