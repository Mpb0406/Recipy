import axios from "axios";
import {
  BOOKMARK_RECIPE,
  FOLLOW_USER,
  GET_PROFILE,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
  UNFOLLOW_USER,
} from "./types";

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

export const removeBookmark = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/profile/remove-bookmark/${id}`);

    dispatch({
      type: REMOVE_BOOKMARK,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const followUser = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/profile/follow/${id}`);

    dispatch({
      type: FOLLOW_USER,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const unfollowUser = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/profile/unfollow/${id}`);

    dispatch({
      type: UNFOLLOW_USER,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getBookmarkedRecipes =
  ([id]) =>
  async (dispatch) => {
    const recipes = await id.map((recipe) =>
      axios.get(`/api/recipes/myrecipes/${recipe}`)
    );

    dispatch({
      type: GET_BOOKMARKS,
      payload: recipes,
    });
  };
