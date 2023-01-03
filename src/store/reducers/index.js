import favoriteReducer from "./favoriteReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    favoriteReducer,
});

export default rootReducer;