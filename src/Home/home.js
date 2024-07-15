import React from 'react'
import './home.css'
import { useDispatch,useSelector } from 'react-redux'
import {increment,decrement} from './homeSlice'
const Home = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.home)
  return (
    <div className='home-container'>
      <div className={data.value>5?'plus':'minus'}>
      {data.value}
     <div onClick={()=>dispatch(increment())} >+</div>
     <div onClick={()=>dispatch(decrement())} >-</div>
    </div>
    </div>
  )
}

export default Home