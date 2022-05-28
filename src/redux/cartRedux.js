import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total: 0,
    },
    reducers:{
        initialize:(state, action) => {
          state.products = [];
          state.quantity = 0;
          state.total = 0;
        },
        addProduct:(state,action) => {
            var k = 1;
            for (var i = 0; i < state.products.length; i++)
            {
              if (action.payload.productId === state.products[i].productId)
              {
                state.products[i].quantity++;
                k = 0;              }
            }
            if (k == 1) {
              state.quantity += 1;
              state.products.push(action.payload);
              state.total += action.payload.price * action.payload.quantity;
            }
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

export const {initialize, addProduct , removeProduct, decreaseQuantity, increaseQuantity, takeOrder} = cartSlice.actions;
export default cartSlice.reducer;
