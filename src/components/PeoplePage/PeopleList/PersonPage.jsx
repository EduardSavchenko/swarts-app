import { useParams } from "react-router";
import { getApiResourse } from "../../../utils/network";
import { useEffect, useState, Suspense, lazy } from "react";
import { API_PERSON } from "../../../constants/api";
import { withErrorApi } from "../../../hoc/withErrorApi";
import { getPeopleImg } from "../../../services/getPeopleData";
import { PersonInfo } from "./PersonInfo";
import { PersonPhoto } from "./PersonPhoto";
import { BackButton } from "./BackButton";
import { Loader } from "../../Loader";
import { useSelector } from "react-redux";

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => promise);
}
const FilmsComponent = lazy(() => delayForDemo(import("./FilmsComponent")));

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImg, setPersonImg] = useState(null);
  const [personid, setPersonid] = useState(null);
  const [personFilms, setPersonFillms] = useState([]);
  const [personFavorite, setPersonFavorite] = useState(false);

  const arrToFavoriteId = useSelector((state) => state.favoriteReducer).map(
    (el) => el.personid
  );
  const id = useParams();
  const personID = id.id;
  useEffect(() => {
    (async () => {
      const res = await getApiResourse(API_PERSON + "/" + personID);

      arrToFavoriteId.includes(personID)
        ? setPersonFavorite(true)
        : setPersonFavorite(false);

      setPersonid(personID);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonImg(getPeopleImg(personID));
        res.films.length && setPersonFillms(res.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <BackButton />
      <div className="wrapper-person-page">
        <span className="person-page-name">{personName}</span>
        <div className="wrapper-person-pi">
          <PersonPhoto
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
            personImg={personImg}
            personName={personName}
            personid={personid}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<Loader />}>
              <FilmsComponent personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export const PersonPageWE = withErrorApi(PersonPage);
