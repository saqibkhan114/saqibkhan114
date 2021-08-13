//bring all the reducers at one place 

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import users from "./user.reducer";

//import productApiReducer from "./productswithApi-Sagas/products-api.reducer";

export default combineReducers({
    cart: cartReducer, user:users
})