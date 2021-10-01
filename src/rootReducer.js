import { combineReducers } from "redux";
import bikeReducer from "./components/bikeSlice";

export default combineReducers({
  bikes: bikeReducer,
});
