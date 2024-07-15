import { createSlice } from "@reduxjs/toolkit";

const loveSice=createSlice({
    initialState:{
        value:0
    },
    name:"loveCalci",
    reducers:{
      calculateLove:(state,{payload})=>{
       let calculatedValue=Math.floor(Math.random()*100)
     state.value=calculatedValue
      }
    }
})
export let{calculateLove}=loveSice.actions
export default loveSice.reducer