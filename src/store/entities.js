import { combineReducers } from "redux";
import bikesReducer from "./slices/bikes";

export default combineReducers({
  bikes: bikesReducer,
});
