import { reducer } from "./reducer";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    user: reducer,
})


export default rootReducer