import {createSlice} from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
    name: "invoice",
    initialState:{
        invoices:[],
        showInvoice: null,
        flag:false
        
    },
    reducers:{
        initialize:(state, action) => {
          state.showInvoice = null;
          state.flag = false;
        },
        flagChangeTrue:(state, action) => {
          state.flag = true;
        },
        flagChangeFalse:(state, action) => {
        state.flag = false;
        },
        loadInvoice:(state, action) => {
          state.showInvoice = action.payload;
        },
        addInvoice:(state, action) => {
          state.invoices.push(action.payload);
        },
        createInvoice:(state,action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
        }
    },
});

export const {createInvoice, flagChangeTrue, loadInvoice, initialize, flagChangeFalse} = invoiceSlice.actions;
export default invoiceSlice.reducer;
