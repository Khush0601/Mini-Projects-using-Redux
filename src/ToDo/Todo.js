import React, { useState } from 'react'
import './Todo.css'
import { useDispatch, useSelector } from 'react-redux' 
import { addNewTask } from './ToDoSlice'


const Todo = () => {
    const [inputUpdate,setInputUpdate]=useState('')
    const onInputUpdate=(e)=>{
    setInputUpdate(e.target.value)
    }
    const dispatch=useDispatch()
   const state=useSelector((state)=>state.todo)
    console.log(state)
   
    const onDataSubmit = (e) => {
         e.preventDefault()
         console.log(inputUpdate)
      dispatch(addNewTask(inputUpdate))
    }
    console.log(state?.todo)
    
  return (
    <div className='todo-container'>
        <form onSubmit={onDataSubmit}>
            <input type='text' placeholder="enter task" value={inputUpdate} onChange={(e)=>onInputUpdate(e)}/>
            <button>Add</button>
        </form>
       <div>{state?.todo?.map((el,i)=>{
        return <div key={i}>{el}</div>
       })}</div>
      
    </div>
  )
}

export default Todo