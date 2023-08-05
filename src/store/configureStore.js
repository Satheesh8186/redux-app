import { createStore } from "redux";
import AllRedcuers   from "../reducers";
const store = createStore(
    AllRedcuers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;