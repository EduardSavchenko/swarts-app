import {
    HTTPS,
    SWAPI_ROOT,
    SWAPI_PEOPLE,
    GUIDE_IMG_EXTENSION,
    URL_IMG_PERSON,
    SWAPI_PARAM_PAGE
} from "../constants/api";

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const pageId = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
    return Number(pageId);
}


const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, "")
        .replace(/\//g, "");
    return id;
}


export const getPeopleId = (url) => {
    return getId(url, SWAPI_PEOPLE);
}
export const getPeopleImg = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
