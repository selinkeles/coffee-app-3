import {createSlice} from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
    name: "invoice",
    initialState:{
        products:[],
        total: 0,
    },
    reducers:{
        createInvoice:(state,action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
        }
    },
});

export const {createInvoice} = invoiceSlice.actions;
export default invoiceSlice.reducer;