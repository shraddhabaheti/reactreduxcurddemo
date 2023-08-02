import todoReducers from "./todoReducer";
import { combineReducers } from "redux";
export const rootReducer=combineReducers({
    todoReducers,
})