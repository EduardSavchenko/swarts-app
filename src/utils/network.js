import { HTTP, HTTPS } from "../constants/api";

/**
 * изменяется с url HTTP на НТТPS
 * @param {String} url - для изм.
 * @returns {String} url - с HTTPS
 */
const chancheHTTP = (url) => {
    const results = url ? url.replace(HTTP, HTTPS) : url;
    return results;
}

export { chancheHTTP }
/*export const getApiResourse = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(body => console.log(body))
        .catch(error => console.log(error.message))
}
*/


/**
 * Отправялет запрос fetch 
 * @param {String} url для запроса
 * @returns {Promise} Promise с результатом запроса
  */
export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch. ', res.status)
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error('Could not fetch. ', error.message)
        return false;
    }
}


/*(async () => {
    const body = await getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body);
})();  // асинхронная самовызывающаяся функция (useEffect)

*/