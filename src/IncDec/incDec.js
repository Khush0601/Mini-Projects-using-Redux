import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, counetr } from './incDecSlice'
const IncDec = () => {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.incDec)
    
  return (
    <>
    <h1>Welcome to Redux</h1>
   <div>
    <span><h1 onClick={()=>dispatch(increment())}>+</h1></span>
    <span>{data.value}</span>
    <span><h1 onClick={()=>dispatch(decrement())}>-</h1></span>
    <span><h1  onClick={()=>dispatch(counetr())}>Mul</h1></span>

   </div>
    </>
  )
}

export default IncDec