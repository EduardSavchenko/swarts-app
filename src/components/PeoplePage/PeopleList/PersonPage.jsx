import { useParams } from "react-router";
import { getApiResourse } from "../../../utils/network";
import { useEffect, useState } from "react";
import { API_PERSON } from "../../../constants/api";
import { withErrorApi } from "../../../hoc/withErrorApi";
import PropTypes from "prop-types";
import { getPeopleImg } from "../../../services/getPeopleData";
import { PersonInfo } from "./PersonInfo";
import { PersonPhoto } from "./PersonPhoto";

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImg, setPersonImg] = useState(null);
  const id = useParams();
  const personID = id.id;
  useEffect(() => {
    (async () => {
      const res = await getApiResourse(API_PERSON + "/" + personID);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Films", data: res.films },
        ]);
        setPersonName(res.name);
        setPersonImg(getPeopleImg(personID));
        //res.films - дальше использовать
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <div>
      <h1>{personName}</h1>
      <PersonPhoto personImg={personImg} personName={personName} />
      {personInfo && <PersonInfo personInfo={personInfo} />}
    </div>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export const PersonPageWE = withErrorApi(PersonPage);
