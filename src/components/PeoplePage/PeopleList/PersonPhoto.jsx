import PropTypes from "prop-types";

const PersonPhoto = ({ personImg, personName }) => {
  return (
    <div className="person-wrapper-img">
      <img className="person-img" src={personImg} alt={personName} />
    </div>
  );
};
PersonPhoto.propTypes = {
  personImg: PropTypes.string,
};
export { PersonPhoto };
