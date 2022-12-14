import { USER_ACTION_TYPES } from "./user-action.types";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  // switch (type) {
  //     case USER_ACTION_TYPES.SET_CURRENT_USER:
  //     return {...state, currentUser: payload};
  //     default:
  //       return state;
  //     }

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};
