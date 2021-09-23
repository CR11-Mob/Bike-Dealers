import { combineReducers } from "redux";
import bikesReducer from "./bikes";

export default combineReducers({
  bikes: bikesReducer,
});
