import { useEffect, useState } from "react";
import { getApiResourse } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { withErrorApi } from "../../hoc/withErrorApi";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const getResourse = async (url) => {
    const res = await getApiResourse(url);
    if (res) {
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  /* можно выводить деструктиризацию там где map метод element {name и url}*/

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return (
    <>
      <h2>Navigation</h2>({people && <PeopleList people={people} />})
    </>
  );
};

export const withErrorApi(PeoplePage)
