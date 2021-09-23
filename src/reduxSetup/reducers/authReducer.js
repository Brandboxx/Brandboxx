import { IS_AUTHENTICATED, USER_DETAILS, TOKEN } from "../constant";

const initialState = { isAuthenticated: false, userDetails: null, token:'' };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
