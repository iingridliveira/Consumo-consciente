
import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Header/Navbar.jsx";


function App() {

  return (
    <>

      <div>

      <Navbar title={"Consumo Consciente"} logo={"https://i.im.ge/2024/04/14/ZTlDp8.1edd2f03-867f-430e-a181-228d71f58135-removebg-preview-1.png"} Products={"Produtos"} Home={"Home"}/>
          <Outlet/>
      </div>

    </>
  )
}

export default App
