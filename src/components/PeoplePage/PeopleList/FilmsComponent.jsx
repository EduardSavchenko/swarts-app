import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { makeConcurrentRequest } from "../../../utils/network";

const FilmsComponent = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    (async () => {
      const films = await makeConcurrentRequest(personFilms);

      setFilmsName(films);
    })();
  }, [personFilms]);
  return (
    <div className="wrapper-films">
      <ul className="container-films">
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className="item-films" key={episode_id}>
              <span className="episode-films">Episode {episode_id}</span>
              <span className="colon-films">:</span>
              <span className="title-films">{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilmsComponent;
