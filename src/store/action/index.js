import actionType from "../constans/actionType"


export const setToFavorite = (person) => ({
    type: actionType.ADD_PERSON_TO_FAVORITE,
    payload: person
})


export const removeFromFavorite = (personid) => ({
    type: actionType.REMOVE_PERSON_FROM_FAVORITE,
    payload: personid
})