import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getApiResourse, chancheHTTP } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { withErrorApi } from "../../hoc/withErrorApi";
import {
  getPeopleId,
  getPeopleImg,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";
import { PeopleNavigation } from "./PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page");

  const getResourse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        console.log(url);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPreviousPage(chancheHTTP(res.previous));
      setNextPage(chancheHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  /* можно выводить деструктиризацию там где map метод element {name и url}*/

  useEffect(() => {
    getResourse(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResourse={getResourse}
        previousPage={previousPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

export const PeoplePageWE = withErrorApi(PeoplePage);
