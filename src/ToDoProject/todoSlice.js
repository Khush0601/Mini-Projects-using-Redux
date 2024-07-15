import { createSlice } from "@reduxjs/toolkit";

const todoProjectSlice=createSlice({
    initialState:{
     todoTask:[],
     progressTask:[],
     completedTask:[],
    },
    name:'todoProject',
    reducers:{
      onFormUpdate:(state,{payload})=>{
        state.todoTask=[...state.todoTask,payload]
       
       
      },
      onNextClick:(state,{payload})=>{
       state.progressTask=[...state.progressTask,payload]
       let filteredTodo=state.todoTask.filter((val,i)=>val!==payload)
       state.todoTask=filteredTodo
      },
      onProgressNextClick:(state,{payload})=>{
       state.completedTask=[...state.completedTask,payload]
       let filteredProgress=state.progressTask.filter((value,index)=>value!==payload)
       state.progressTask=filteredProgress
      },
      onProgressBackClick:(state,{payload})=>{
        let progressArray=state.progressTask.filter((el,i)=>payload!==el)
        state.progressTask=progressArray
        state.todoTask=[...state.todoTask,payload]
      },
      onCompletedBackClick:(state,{payload})=>{
        let completedArray=state.completedTask.filter((el,i)=>payload!==el)
        state.completedTask=completedArray
        state.progressTask=[...state.progressTask,payload]
      }
     
    }
})
export let{onFormUpdate,onNextClick,onProgressNextClick,onProgressBackClick,onCompletedBackClick}=todoProjectSlice.actions
export  default todoProjectSlice.reducer