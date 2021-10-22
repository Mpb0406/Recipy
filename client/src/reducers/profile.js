import {
  BOOKMARK_RECIPE,
  GET_PROFILE,
  REMOVE_BOOKMARK,
} from "../actions/types";

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
    case REMOVE_BOOKMARK:
      return {
        ...state,
        profile: { ...state.profile, bookmarks: payload },
        loading: false,
      };
    default:
      return state;
  }
}
