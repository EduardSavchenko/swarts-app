import { useEffect, useState } from "react";
import { getApiResourse } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResourse = async (url) => {
    const res = await getApiResourse(url);
    /* можно выводить деструктиризацию там где map метод element {name и url}*/
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImg(id);
      console.log(img);
      return {
        id,
        name,
        img,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>HELLO</h1>
      {people && (
        <ul>
          {people.map(({ name, id, img }) => (
            <li key={id}>
              <img src={img} alt={name} />
              <p> {name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { PeoplePage };
