import React from "react"
import { Navbar } from "./Components/Navbar";
import {Routes,Route} from "react-router-dom"
import {Home} from "./Components/Home"
import {Products} from "./Components/Products"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register"

import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Routes>
             <Route path = "/home" element = {<Home />}/>
             <Route path = "/Products" element ={<Products />} />
             <Route path = "/Login" element ={<Login />} />
             <Route path = "/Register" element ={<Register />} />
         
         </Routes>
    </div>
  );
}

export default App;
