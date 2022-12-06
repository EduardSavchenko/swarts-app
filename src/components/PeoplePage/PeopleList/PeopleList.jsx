import React from "react";
import PropTypes from "prop-types";

const PeopleList = ({ people }) => {
  return (
    <ul className="container">
      {people.map(({ name, id, img }) => (
        <li className="item" key={id}>
          <a href="#">
            <img className="person-photo" src={img} alt={name} />
            <p> {name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export { PeopleList };
