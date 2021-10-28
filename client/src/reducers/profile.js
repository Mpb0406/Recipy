import {
  BOOKMARK_RECIPE,
  GET_PROFILE,
  REMOVE_BOOKMARK,
  FOLLOW_USER,
  GET_BOOKMARKS,
  UNFOLLOW_USER,
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
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return {
        ...state,
        profile: { ...state.profile, following: payload },
        loading: false,
      };
    case GET_BOOKMARKS:
      return {
        ...state,
        profile: { ...state.profile, bookmarks: payload },
      };
    default:
      return state;
  }
}
