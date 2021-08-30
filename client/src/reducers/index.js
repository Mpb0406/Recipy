import { combineReducers } from "redux";
// Reducer Files
import alert from "./alert";
import auth from "./auth";

export default combineReducers({
  alert,
  auth,
});
