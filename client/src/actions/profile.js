import axios from "axios";
import { BOOKMARK_RECIPE, GET_PROFILE } from "./types";

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const bookmarkRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/profile/bookmark/${id}`);

    dispatch({
      type: BOOKMARK_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
