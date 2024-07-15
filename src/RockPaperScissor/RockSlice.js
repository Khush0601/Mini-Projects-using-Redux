import { createSlice } from "@reduxjs/toolkit";


const rockSlice=createSlice({
    initialState:{
        gameDice:['rock','paper','scissor'],
        userPoint:0,
        computerPoint:0,
        userTurn:'',
        computerTurn:'',
    },
    name:'RockScissorPaper',
    reducers:{
        selectingUserEl:(state,{payload})=>{
           console.log(payload)
           state.computerTurn=''
           state.userTurn=payload
        },
        selectingComputerEl:(state,{payload})=>{
         let randomTake=Math.floor(Math.random()*state?.gameDice?.length)
         if(state?.userTurn=== state?.gameDice[randomTake]){
            randomTake = randomTake===0?1:randomTake-1
         }

         state.computerTurn=state?.gameDice[randomTake]
        
        },
        winningTeam:(state,{payload})=>{
            if(state?.userTurn==='rock' && state.computerTurn==='scissor'){
                state.userPoint=state.userPoint+1
            }
            else if(state?.userTurn==='paper' && state.computerTurn==='rock'){
                state.userPoint=state.userPoint+1
            }
            else if(state?.userTurn==='scissor' && state.computerTurn==='paper'){
                state.userPoint=state.userPoint+1
            }
            else{
                state.computerPoint=state.computerPoint+1
            }
        }
    }
})
export let {selectingUserEl,selectingComputerEl,winningTeam}=rockSlice.actions
export default rockSlice.reducer