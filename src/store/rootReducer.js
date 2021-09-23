import { combineReducers } from "redux";
import entitiesReducer from "./slices/entities/entities";

export default combineReducers({
  entities: entitiesReducer,
});
