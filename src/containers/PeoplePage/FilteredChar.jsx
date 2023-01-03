import { useEffect, useState } from "react";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import { makeConcurrentRequest } from "../../utils/network";
const FilteredChar = ({ filteredchar }) => {
  const [charsName, setCharsName] = useState([]);

  useEffect(() => {
    (async () => {
      const dataChars = await makeConcurrentRequest(filteredchar);
      setCharsName(dataChars);
    })();
  }, [filteredchar]);

  return (
    <>
      <ul>
        {charsName.map((el, index) => (
          <li key={index}>
            <img src={getPeopleImg(getPeopleId(el.url))}></img>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export { FilteredChar };
