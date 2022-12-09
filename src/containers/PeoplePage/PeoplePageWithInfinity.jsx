import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getApiResourse } from "../../utils/network";

import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";

const PeoplePageWithInfinity = () => {
  const [people, setPeople] = useState([]); // массив с персонажами
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const container = useRef(null);

  /*let c = 1;*/
  console.log("перерендер");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getResourse();
      console.log(res, "<<<");
      setPrevPage(currPage);
      setPeople([...people, ...res]);
    };
    if (!lastPage && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastPage, prevPage, people]);

  const getResourse = async (url) => {
    const res = await getApiResourse(
      `https://swapi.py4e.com/api/people/?page=${currPage}`
    );
    if (!res.results.length) {
      setLastPage(true);
      return;
    }
    return res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImg(id);
      return {
        id,
        name,
        img,
      };
    });
  };

  /* const handleScroll = (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    if (windowHeight + scrollTop + 1 >= scrollHeight) {
      getResourse();
    }
  };*/

  const onScroll = () => {
    if (container.current) {
      const { scrollTop, scrollHeight, clientHeight } = container.current;
      if (scrollTop + clientHeight + 100 >= scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <>
      {people && (
        <ul className="container" ref={container} onScroll={onScroll}>
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
