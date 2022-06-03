import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState:{
        deliveries: null,
        invoices:[],

    },
    reducers:{
        initializedelivery:(state, action) => {
          state.deliveries = null;
        },
        addDeliveries:(state,action) => {
            state.deliveries = (action.payload);
        }
    }
    },
);

export const {initializedelivery, addDeliveries} = adminSlice.actions;
export default adminSlice.reducer;