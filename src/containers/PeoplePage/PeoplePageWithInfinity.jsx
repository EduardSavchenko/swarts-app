import { useEffect, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getApiResourse, chancheHTTP } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import {
  getPeopleId,
  getPeopleImg,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";
const PeoplePageWithInfinity = () => {
  const listInnerRef = useRef();

  const [people, setPeople] = useState(null); // массив с персонажами
  const [previousPage, setPreviousPage] = useState(null); // предыдущая страница  с api
  const [nextPage, setNextPage] = useState(null); // следующая страница с api
  const [counterPage, setCounterPage] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams(); //хук с RR

  const queryPage = searchParams.get("page");

  const getResourse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
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
    }
  };
  const handleScroll = (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    console.log(scrollTop);
    console.log(windowHeight);
    console.log(scrollHeight);
    if (windowHeight + scrollTop + 1 >= scrollHeight) {
      getResourse(nextPage);
    }
  };
  useEffect(() => {
    getResourse(API_PEOPLE + queryPage);
    window.addEventListener("scroll", handleScroll);
  }, []);

  /* const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight + 1 >= scrollHeight) {
        console.log("at the bottom page");
      }
    }
  }; */ // не смогу достучаться к элементу через Ref current (нужна консультация....)

  return (
    <>
      {people && (
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
      )}
    </>
  );
};

export { PeoplePageWithInfinity };
