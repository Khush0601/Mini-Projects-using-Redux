import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home/home'
import About from './About/About'
import IncDec from './IncDec/incDec'
import Todo from './ToDo/Todo'
import Rock from './RockPaperScissor/Rock'
import Love from './LoveCalculator/Love'
import TodoProject from './ToDoProject/todoProject'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/inc' element={<IncDec/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/rock' element={<Rock/>}/>
    <Route path='/love' element={<Love/>}/>
    <Route path='/todoProject' element={<TodoProject/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App