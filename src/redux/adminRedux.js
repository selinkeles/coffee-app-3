import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState:{
        deliveries: [],
        invoices:[],
        cost:null,
        revenue:null,
        items:null

    },
    reducers:{
        initializedelivery:(state, action) => {
          state.deliveries = [];
        },
        initializeInvoice:(state, action) => {
            state.invoices = [];
          },
        addDeliveries:(state,action) => {
            state.deliveries.push(action.payload);
        },
        addInvoices:(state,action) => {
            state.invoices.push(action.payload);
        },
        getCost:(state, action) => {
            state.cost = action.payload;
        },
        getItems:(state, action) => {
            state.items = action.payload;
        },
        getRevenue:(state, action) => {
            state.revenue = action.payload;
        },
    }
    },
);

export const {initializedelivery, addDeliveries, initializeInvoice, addInvoices, getCost, getRevenue, getItems} = adminSlice.actions;
export default adminSlice.reducer;