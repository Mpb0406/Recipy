import { ADD_RECIPE, RECIPE_ERROR } from "./types";
import axios from "axios";
import { displayAlert } from "./alert";

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
