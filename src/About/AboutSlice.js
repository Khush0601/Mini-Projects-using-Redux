import {createSlice} from '@reduxjs/toolkit'
 const AboutSlice=createSlice({
    initialState:{
        todo:[],
        progress:[],
        completed:[]
    },
    name:'Todo',
    reducers:{
        addNewTask(state,{type,payload}){
            let obj={
                name:payload.name,
                date:payload.date,
            }
            state.todo=[...state.todo,obj]
        },
        removeTask(state,{type,payload}){
           
           let filteredData=state.todo.filter((el,i)=>el.name !== payload.name)
           state.todo=filteredData
        }
       
    },
   
    


})

 export let {addNewTask,removeTask}=AboutSlice.actions
 export default AboutSlice.reducer