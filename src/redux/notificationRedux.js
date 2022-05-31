import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState:{
        notificationList:[],
        quantity3:0,

    },
    reducers:{
        initialize3:(state, action) => {
          state.notificationList = [];
          state.quantity3 = 0;
        },
        addNotification:(state,action) => {
            state.quantity3 += 1;
            state.notificationList.push(action.payload);
        }
        },
    },
);

export const {initialize3, addNotification} = notificationSlice.actions;
export default notificationSlice.reducer;