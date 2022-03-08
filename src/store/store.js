import { createStore } from "redux";
import  combineReducers  from "./combineReducer";

export const Store = createStore(combineReducers)

