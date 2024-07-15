import React, { useState } from 'react'
import './todoProject.css'
import {  useDispatch, useSelector } from 'react-redux'
import {  onCompletedBackClick, onFormUpdate, onNextClick, onProgressBackClick, onProgressNextClick } from './todoSlice'
const TodoProject = () => {
    const [inputUpdate,setInputUpdate]=useState('')
    const onInputUpdate=(e)=>{
        setInputUpdate(e.target.value)
    }
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.todoProject)
    // console.log(state)

   const onFormSubmit=(e)=>{
     e.preventDefault()
    dispatch(onFormUpdate(inputUpdate))
   }
   console.log(state)
    console.log(inputUpdate)
    console.log(state)
    console.log(state?.completedTask)
  return (
    <div className='to-container'>
       <div className='input-container'>
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder='enter Task' value={inputUpdate} onChange={(e)=>onInputUpdate(e)}/>
            <button>Add</button>
        </form>
       </div>
       <div className='todoTask'>
        <h1>Todo Task</h1>
       {state?.todoTask?.map((el,i)=>{
        return  <div className='todoTask-Box' key={i}>
              <h3>{el}</h3>
              <button onClick={()=>dispatch(onNextClick(el))}>Next</button>
              <button>Delete</button>
        </div>
       })}
       </div>
       <div className='ProgressTask'>
        <h1>Progress task</h1>
       {state?.progressTask?.map((el,i)=>{
        return  <div className='todoTask-Box' key={i}>
              <h3>{el}</h3>
              <button onClick={()=>dispatch(onProgressNextClick(el))}>Next</button>
              <button onClick={()=>dispatch(onProgressBackClick(el))}>Back</button>
        </div>
       })}
       </div>
       <div className='completedTask'>
         <h1>CompletedTask</h1>
         {state?.completedTask?.map((el,i)=>{
        return  <div className='todoTask-Box' key={i}>
              <h3>{el}</h3>
             <button onClick={()=>dispatch(onCompletedBackClick(el))} >Back</button>
        </div>
       })}
       </div>
    </div>
  )
}

export default TodoProject