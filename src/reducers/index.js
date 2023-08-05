//combine reducer isused to combine all the reduces into one 
import { combineReducers } from "redux";
import counter from "./counterReducer";
const AllReducers = combineReducers({
    counter
});
export default AllReducers;