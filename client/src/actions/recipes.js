import {
  ADD_RECIPE,
  CLEAR_RECIPE,
  GET_ALL_RECIPES,
  GET_RECIPE,
  GET_RECIPES,
  LIKE_RECIPE,
  RECIPE_ERROR,
  UNLIKE_RECIPE,
  UPDATE_RECIPE,
} from "./types";
import axios from "axios";
import { displayAlert } from "./alert";
import { useParams } from "react-router-dom";

// Get All User Recipes
export const getRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/recipes/myrecipes");

    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Recipe By ID
export const getOneRecipe = (recipeID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/recipes/myrecipes/${recipeID}`);

    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response },
    });
  }
};

// Get All DB Recipes
export const allRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/recipes/recipesfeed");

    dispatch({
      type: GET_ALL_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response },
    });
  }
};

// Make Post Request
export const addRecipe = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/recipes", formData, config);

    dispatch({
      type: ADD_RECIPE,
      payload: res.data,
    });

    dispatch(displayAlert("Recipe Created Successfully!", "success"));

    history.push("/myrecipes");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(displayAlert(error.msg, "danger")));
    }

    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateRecipe = (formData, id, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(`/api/recipes/${id}`, formData, config);

    dispatch({
      type: UPDATE_RECIPE,
      payload: res.data,
    });

    history.push("/myrecipes");
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const likeRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/recipes/like/${id}`);

    dispatch({
      type: LIKE_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
    });
  }
};

export const unlikeRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/recipes/unlike/${id}`);

    dispatch({
      type: UNLIKE_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECIPE_ERROR,
    });
  }
};
