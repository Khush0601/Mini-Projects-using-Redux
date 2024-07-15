import React, { useState } from 'react'
import './love.css'
import {useDispatch,useSelector} from 'react-redux'
import { calculateLove } from './loveSlice'
const Love = () => {
    const[userInput,setUserInput]=useState('')
    const[partnerInput,setPartnerUpdate]=useState('')
    const onUserClick=(e)=>{
        setUserInput(e.target.value)
    }
    const onPartnerClick=(e)=>{
        setPartnerUpdate(e.target.value)
    }
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.love)
    const onFormSubmit=(e)=>{
      e.preventDefault()
      dispatch(calculateLove())
    }
    console.log(state)
    console.log(userInput)
    console.log(partnerInput)
  return (
    <div className='-love-container'>
        <h1>Love Calci</h1>
       <form onSubmit={onFormSubmit}>
       <input type='text' placeholder='enter your Name' onChange={(e)=>onUserClick(e)}/>
       <input type='text' placeholder='enter partner Name' onChange={(e)=>onPartnerClick(e)}/>
       <button>calculate</button>
       </form>
      {
        state?.value &&  <div>{`Love Blw  ${userInput} and ${partnerInput} is ${state?.value}`}</div>
      }
    </div>
  )
}

export default Love