import React,{useState} from 'react'
import {addNewTask, removeTask} from './AboutSlice'
import { useDispatch, useSelector } from 'react-redux'
const About = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const state=useSelector((state)=>state.about)
    console.log(state)
  return (
    <div>
        <h1>About</h1>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>dispatch(addNewTask({
            name:name,
            date:'10/02/2020'
        }))}>add</button>
        <button onClick={()=>dispatch(removeTask({
          name:name,
        }))}>remove</button>
    </div>
  )
}

export default About