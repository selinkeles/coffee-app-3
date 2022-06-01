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
    },
    addProduct2:(state,action) => {
        state.quantity2 += 1;
        state.products2.push(action.payload);
    },
    removeProduct2:(state,action) => {
      console.log(state.products2);
      var ind = 0;
      for (var i = 0; i < state.quantity2; i++)
      {
        if (state.products2.productId == action.payload.productId)
        {
          ind = i;
          break;
        }
      }
            
      state.products2.splice(ind, 1);
      state.quantity2 -= 1;
    },

  },
});

export const { initialize2, addProduct2 , removeProduct2} = wishlistSlice.actions;
export default wishlistSlice.reducer;
