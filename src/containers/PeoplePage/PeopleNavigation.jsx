import { Link } from "react-router-dom";
import { UiButton } from "./UiButton";

const PeopleNavigation = ({
  getResourse,
  previousPage,
  nextPage,
  counterPage,
}) => {
  const handleChangePrev = () => getResourse(previousPage);
  const handleChangeNext = () => getResourse(nextPage);
  return (
    <div className="navbarnavigation">
      <Link to={`/people/?page=${counterPage - 1}`} className="linkbutton">
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!previousPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className="linkbutton">
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

export { PeopleNavigation };
