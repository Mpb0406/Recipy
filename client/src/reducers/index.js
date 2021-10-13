import { combineReducers } from "redux";
// Reducer Files
import alert from "./alert";
import auth from "./auth";
import recipes from "./recipes";
import profile from "./profile";

export default combineReducers({
  alert,
  auth,
  recipes,
  profile,
});
