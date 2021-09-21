import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";

const RootReducer = combineReducers ({
    auth:authReducer,
    app:appReducer
});

export default RootReducer;