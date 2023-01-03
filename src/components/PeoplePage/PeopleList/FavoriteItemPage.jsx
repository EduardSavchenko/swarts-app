import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PeopleList } from "./PeopleList";

const FavoriteItemPage = () => {
  const [peoplefav, setPeoplefav] = useState([]);
  const storeData = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    const favoritestore = () => {
      if (storeData) {
        const peopleArr = storeData.map((el) => {
          return {
            id: el.personid,
            name: el.personName,
            img: el.personImg,
          };
        });
        setPeoplefav(peopleArr);
        console.log("массив избранных", peopleArr);
      }
    };
    favoritestore();
  }, []);

  return (
    <>
      <h2>Favorite Сharacter</h2>
      {peoplefav.length ? (
        <PeopleList people={peoplefav} />
      ) : (
        <h2> No favorite character</h2>
      )}
    </>
  );
};

export { FavoriteItemPage };
