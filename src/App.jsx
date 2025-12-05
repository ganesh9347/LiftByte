import { Routes, Route } from "react-router-dom";
import HomeIdle from "./pages/HomeIdle";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIdle />} />
    </Routes>
  );
}










/*import React from 'react'
import Sidebar from './components/Sidebar'
import ControlPanel from './components/ControlPanel'

export default function App(){ 
  return (
    <div className="app-container">
      
    </div>
  )
}*/
