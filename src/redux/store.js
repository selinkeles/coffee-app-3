import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import orderReducer from "./orderRedux";
import invoiceReducer from "./invoiceRedux";
import wishlistReducer from "./wishlistRedux";


export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        order: orderReducer,
        invoice: invoiceReducer,
        wishlist: wishlistReducer,
    },
});
