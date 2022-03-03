import { combineReducers } from "redux";
import { productsReduser } from "../products/productsReduser";
import { loginReduser } from "../logIn/loginReduser";

export default combineReducers( {
    productsReduser,
    loginReduser
})