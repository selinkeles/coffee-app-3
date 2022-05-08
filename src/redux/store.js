import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import orderReducer from "./orderRedux";


export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        order: orderReducer,
    },
});
