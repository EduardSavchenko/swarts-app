import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PeopleList = ({ people }) => {
  return (
    <ul className="container">
      {people.map(({ name, id, img }) => (
        <li className="item" key={id}>
          <Link to={`/people/${id}`}>
            <img className="person-photo" src={img} alt={name} />
            <p> {name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export { PeopleList };
