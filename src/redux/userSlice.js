import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState:{
        exist: "true",
        name: "selin",
        surname: "keles",
        email: "selinkeles@sabanciuniv.edu",
        password: "12345678",
        address: "",
    },
    reducers:{
        update: (state,action) {

        }
    }


})