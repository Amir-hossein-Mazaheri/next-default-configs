import { combineReducers } from "redux";
import entitiesReducers from "./entities/entitiesReducers";
import uiReducer from "./ui";

const reducers = combineReducers({
  entities: entitiesReducers,
  ui: uiReducer,
});

export default reducers;
