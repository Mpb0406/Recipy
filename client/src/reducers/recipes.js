import {
  ADD_RECIPE,
  CLEAR_RECIPE,
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
        recipe: null,
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
    case CLEAR_RECIPE:
      return {
        ...state,
        recipe: null,
      };
    default:
      return state;
  }
}
