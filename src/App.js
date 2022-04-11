import React from "react"
import { Navbar } from "./Components/Navbar";
import {Routes,Route} from "react-router-dom"
import {Home} from "./Components/Home"
import {Products} from "./Components/Products"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register"



function App() {
  return (
    <div className="App">
         <Navbar />
         <Routes>
             <Route path = "/" element = {<Home />}/>
             <Route path = "/products" element ={<Products />} />
             <Route path = "/login" element ={<Login />} />
             <Route path = "/register" element ={<Register />} />
         
         </Routes>
    </div>
  );
}

export default App;
