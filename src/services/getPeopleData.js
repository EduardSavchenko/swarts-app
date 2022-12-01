import { HTTPS, HTTP, SWAPI_ROOT, SWAPI_PEOPLE } from "../constants/api";


const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, "");
    console.log(id)
    return id;
}


export const getPeopleId = (url) => {
    getId(url, SWAPI_PEOPLE);
}