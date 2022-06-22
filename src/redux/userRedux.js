import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    cart: null,
    admin: false
  },
  reducers: {
    initializeUser: (state) => {
      state.currentUser = null;
      state.error = false;
      state.cart = null;
      state.admin = false;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccessAdmin: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.admin = true;
    },
    loginSuccessUser: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: (state,action) => {
      state.currentUser = null;
      state.error = false;
      state.cart = null;
      state.admin = false;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    }
  },
});

export const { initializeUser, loginStart, loginSuccessAdmin, loginSuccessUser, loginFailure, logoutUser, setCart} = userSlice.actions;
export default userSlice.reducer;
