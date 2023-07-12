import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Projects from './Components/Projects'
import Home from './Components/Home'
import MoreInfoFrontEnd from './Components/MoreInfo-Front-end'
import MoreInfoToDo from './Components/More-info-To-Do-List'


function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/front-end" element={<MoreInfoFrontEnd/>} />
        <Route path="/ToDoList" element={<MoreInfoToDo/>} />
      </Routes>
    </>
  )
}

export default App
