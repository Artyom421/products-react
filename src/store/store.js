import { createStore } from "redux";
import  combineReducers  from "./reducer/reducer";

export const Store = createStore(combineReducers)

