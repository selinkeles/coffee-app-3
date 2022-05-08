import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            console.log(action.payload.price)
        },
        removeProduct:(state,action) => {
            state.quantity -= 1;
            console.log(action.payload)
            state.total -= action.payload.price * action.payload.quantity;
            state.products.pop(action.payload);
            
            
            console.log(action.payload.price)
        },
        decreaseQuantity:(state,action) => {
            action.payload.quantity -= 1;
            //state.products.reverse(action.payload);
            state.total -= action.payload.price;
        },
        increaseQuantity:(state,action) => {
            action.payload.quantity += 1;
            //state.products.(action.payload);
            state.total += action.payload.price;
        },
        takeOrder:(state) => {
            state.quantity = 0;
            state.total = 0;
            state.products = [];
        },
    },
});

export const {addProduct , removeProduct, decreaseQuantity, increaseQuantity, takeOrder} = cartSlice.actions;
export default cartSlice.reducer;