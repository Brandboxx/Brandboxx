import { IS_LOADING } from "../constant";

export const initialState = { isLoading: false }

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading:action.payload}
        default:
            return state;
    }
}