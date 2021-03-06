import { createStore, applyMiddleware } from "redux";
import { getStorage, setStorage } from "../utils/storage";
import { CENTER_POCKET } from "./constant";
import RootReducer from "./reducers/rootReducer";
import { initialState as appIntialState } from "./reducers/appReducer";
const Store = () => {
  var initialState = getStorage(CENTER_POCKET);
  const StoreData = (store) => (next) => (action) => {
    let result = next(action);
    const saveData = store.getState();
    saveData.app = appIntialState;
    setStorage(CENTER_POCKET, saveData);
    return result;
  };
  return createStore(RootReducer, initialState, applyMiddleware(StoreData));
};
export default Store();
