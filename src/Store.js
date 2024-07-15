import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../src/./Home/homeSlice'
import AboutReducer from "./About/AboutSlice";
import incDecReducer from './IncDec/incDecSlice'
import todoReducer from './ToDo/ToDoSlice'
import rockReducer from './RockPaperScissor/RockSlice'
import loveReducer from './LoveCalculator/loveSlice'
import todoProjectReducer  from './ToDoProject/todoSlice'
const store=configureStore({
    reducer:{
        home:homeReducer,
        about:AboutReducer,
        incDec:incDecReducer,
        todo:todoReducer,
        rock:rockReducer,
        love:loveReducer,
        todoProject:todoProjectReducer,
        
    }
})
export default store