import { combineReducers } from "redux";

import bikeReducer from "./components/bikeSlice";
import routeReducer from "./components/routeSlice";

export default combineReducers({
  bikes: bikeReducer,
  routes: routeReducer,
});
