import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState:{
        orders:[],
    },
    reducers:{
        initializeOrder:(state,action) => {
            state.orders = [];
        },
        addOrder:(state,action) => {
            state.orders.push(action.payload);
        },
    },
});

export const {initializeOrder, addOrder} = orderSlice.actions;
export default orderSlice.reducer;