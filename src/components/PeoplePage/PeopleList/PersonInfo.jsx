import PropTypes from "prop-types";

const PersonInfo = ({ personInfo }) => {
  return (
    <div>
      <ul>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li key={title}>
                <span>
                  {title} : {data}
                </span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};
export { PersonInfo };
