
import actionType from "../constans/actionType";
import { getLocalStorage } from "../../utils/localstorage";
const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PERSON_TO_FAVORITE:

            return (
                [...state, action.payload]
            )
        case actionType.REMOVE_PERSON_FROM_FAVORITE:

            return state.filter((el) => el.personid !== action.payload)
        default:
            return state;
    }
}

export default favoriteReducer;