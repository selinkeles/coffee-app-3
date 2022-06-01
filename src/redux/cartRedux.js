import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        comments:[],
        quantity:0,
        total: 0,
    },
    reducers:{
        initializeCart:(state, action) => {
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
                k = 0;              
                }
            }
            if (k == 1) {
              state.quantity += 1;
              state.products.push(action.payload);
              state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct:(state,action) => {
            console.log(state.products);
            state.total -= action.payload.price * action.payload.quantity;
            console.log(state.products.indexOf(action.payload));
            var ind = 0;
            for (var i = 0; i < state.quantity; i++)
            {
                if (state.products.productId == action.payload.productId)
                {
                    ind = i;
                    break;
                }
            }
            console.log(i);
            state.products.splice(ind, 1);
            state.quantity -= 1;
        },
        makecomment:(state,action) => {
            state.comments.push(action.payload);
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

export const {initializeCart, addProduct , removeProduct, decreaseQuantity, increaseQuantity, takeOrder, makecomment} = cartSlice.actions;
export default cartSlice.reducer;
