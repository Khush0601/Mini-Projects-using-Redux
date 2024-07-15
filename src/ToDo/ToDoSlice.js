import { createSlice } from "@reduxjs/toolkit";


const todoSice=createSlice({
    initialState:{
        todo:[],
    },
    name:'todo',
    reducers:{
     addNewTask:(state,{payload})=>{
      console.log(payload)
     state.todo=[...state.todo,payload]

     }
    }
})
export let{addNewTask}=todoSice.actions
export default todoSice.reducer