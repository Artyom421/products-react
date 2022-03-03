import { combineReducers } from "redux";
import { productsReducer } from "../products/productsReducer/productsReducer";
import { loginReduser } from "../logIn/loginReduser";

export default combineReducers( {
    productsReducer,
    loginReduser
})