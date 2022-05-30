import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState:{
        products2:[],
        quantity2:0,
    },
    reducers:{
        initialize2:(state, action) => {
          state.products2 = [];
          state.quantity2 = 0;
          state.total2 = 0;
        },
        addProduct2:(state,action) => {
            var k = 1;
            for (var i = 0; i < state.products2.length; i++)
            {
              if (action.payload.productId === state.products2[i].productId)
              {
                state.products2[i].quantity++;
                k = 0;              }
            }
            if (k == 1) {
              state.quantity2 += 1;
              state.products2.push(action.payload);
            }
        },
        removeProduct2:(state,action) => {
            state.quantity2 -= 1;
            console.log(action.payload)
            state.products2.pop(action.payload);
            
            console.log(action.payload.price2)
        },

    },
});

export const { initialize2, addProduct2 , removeProduct2} = wishlistSlice.actions;
export default wishlistSlice.reducer;
