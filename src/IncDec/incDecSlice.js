import { createSlice } from "@reduxjs/toolkit";

const incDecSlice=createSlice({
    initialState:{
        value:0,
    },
    name:'counter',
    reducers:{
        increment:(state)=>{
         state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        counetr:(state)=>{
            state.value*=3
        }
    }
})
export const {increment,decrement,counetr} =incDecSlice.actions
export default incDecSlice.reducer
