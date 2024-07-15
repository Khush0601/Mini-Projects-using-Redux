import React from 'react'
import './Rock.css'
import {useDispatch,useSelector} from 'react-redux'
import { selectingComputerEl, selectingUserEl, winningTeam } from './RockSlice'

const Rock = () => {
   const dispatch=useDispatch()
    const state=useSelector((state)=>state.rock)
    console.log(state)
React.useEffect(()=>{
if(state?.userTurn){
  dispatch(selectingComputerEl())
}
},[state?.userTurn])

React.useEffect(()=>{
if(state?.userTurn && state?.computerTurn){
  dispatch(winningTeam())
}
},[state?.userTurn,state?.computerTurn])

  return (
    <div className='container'>
        <h1>Rock Paper Scissor Game</h1>
        <h1>UserPoint:{state?.userPoint}</h1>
        <h1>ComputerPoint:{state?.computerPoint}</h1>
     <div>
        <h2>User Turn:{state?.gameDice?.map((el,i)=>{
            return <button onClick={()=>dispatch(selectingUserEl(el))} key={i}>{el}</button>
        })}</h2>
        <h2>{state?.userTurn}</h2>
        <h2>computer Turn:<span><h2>{state?.computerTurn}</h2></span></h2>
    
     </div>
       
    </div>
  )
}

export default Rock