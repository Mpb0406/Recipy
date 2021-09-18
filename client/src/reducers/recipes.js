import {
  ADD_RECIPE,
  GET_RECIPE,
  GET_RECIPES,
  RECIPE_ERROR,
} from "../actions/types";

const initialState = {
  recipe: null,
  recipes: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipe: payload,
        recipes: [payload],
        loading: false,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    case RECIPE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: payload,
        loading: false,
      };
    default:
      return state;
  }
}
