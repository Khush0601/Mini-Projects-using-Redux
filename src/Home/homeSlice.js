import { createSlice } from "@reduxjs/toolkit";

const homeSlice=createSlice({
    initialState:{
        value:0
    },
    name:'home',
    reducers:{
       increment:(state)=>{
        state.value+=1
       },
       decrement:(state)=>{
       state.value-=1
       }

       
    }
}
   
)
export const {increment,decrement}=homeSlice.actions
export default homeSlice.reducer