import { ADD_RECIPE } from "../actions/types";

const initialState = {
  recipe: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_RECIPE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
