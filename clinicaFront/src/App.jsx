import './App.css'
import Health from "./components/Health.jsx"
import Landing from './components/Landing'
import Psycho from './components/Psycho'
import Eye from './components/Eyes'
import Nutri from './components/Nutri'
import Physio from './components/Physio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
     <Landing/>
     <Eye/>
     <Psycho/>
     <Nutri/>
     <Physio/>
     
      
    </div>
  )
}

export default App
