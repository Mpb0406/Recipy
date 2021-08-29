import { DISPLAY_ALERT, REMOVE_ALERT } from "../actions/types";

initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case DISPLAY_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}