import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState:{
        deliveries:[],
        invoices:[],

    },
    reducers:{
        initializedelivery:(state, action) => {
          state.deliveries = [];
        },
        addDeliveries:(state,action) => {
            state.deliveries.push(payload.action);
        }
    }
    },
);

export const {initializedelivery, addDeliveries} = adminSlice.actions;
export default adminSlice.reducer;