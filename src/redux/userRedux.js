import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    cart: null,
    //cartid: null
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: (state,action) => {
      state.currentUser = null;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutUser, setCart} = userSlice.actions;
export default userSlice.reducer;
