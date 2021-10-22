import { BOOKMARK_RECIPE, GET_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case BOOKMARK_RECIPE:
      return {
        ...state,
        profile: { ...state.profile, bookmarks: payload },
      };
    default:
      return state;
  }
}
