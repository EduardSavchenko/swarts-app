import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import { getPeopleName } from "../../utils/network";
const FilterCharByFilm = () => {
  const [films, setFilms] = useState([]);
  const [chars, setChars] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      let res = await fetch("https://swapi.py4e.com/api/films/");
      let data = await res.json();
      const loadListFC = data.results.map((el) => {
        const title = el.title;
        const characters = el.characters;
        return {
          title,
          characters,
        };
      });
      setFilms(loadListFC);
      setSelectedValue(loadListFC[0].title);
      setChars(loadListFC[0].characters);
    };
    fetchdata();
  }, []);
  console.log(films);

  const arrOptions = films.map((el) => {
    const value = el.title;
    const label = el.title;
    return {
      value,
      label,
    };
  });

  const handChange = (e) => {
    nahodka();
    const changeValue = e.value;
    setSelectedValue(changeValue);
  };
  const nahodka = () => {
    const spisokP = films.find((fi) => fi.title === selectedValue);
    setChars(spisokP.characters);
    console.log(chars);
  };
  return (
    <div className="filter">
      <Select
        value={arrOptions.find((obj) => obj.value === selectedValue)}
        options={arrOptions}
        onChange={handChange}
      />
      <h1>Char of: {selectedValue} </h1>
      <ul>
        {chars.map((el, index) => (
          <li key={index}>
            <img src={getPeopleImg(getPeopleId(el))}></img>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FilterCharByFilm };

/*{getPeopleName(getPeopleId(el))}*/
