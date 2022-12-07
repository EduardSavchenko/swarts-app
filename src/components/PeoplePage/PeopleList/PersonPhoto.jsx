import PropTypes from "prop-types";

const PersonPhoto = ({ personImg, personName }) => {
  return (
    <>
      <img src={personImg} alt={personName} />
    </>
  );
};
PersonPhoto.propTypes = {
  personImg: PropTypes.string,
};
export { PersonPhoto };
