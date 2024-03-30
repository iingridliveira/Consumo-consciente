import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <div>
       <h1>Consumo Consciente</h1>
          <Outlet/>
      </div>
    </>
  )
}

export default App
