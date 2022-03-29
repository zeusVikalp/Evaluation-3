import React from "react"
// import { Navigate } from "react-router-dom";
import { AuthContexts } from "../Contexts/AuthContexts"

export const Login = () => {
    const{login} = React.useContext(AuthContexts) 
    
    const[loginDetails,setLoginDetails] = React.useState({
        username: "",
        password:"",

    })

    const loginChange = (e) => {
        const{name,value} = e.target;

        setLoginDetails({
            ...loginDetails,
            [name]:value

        });

    }
    
    const submitLogin = (e) =>{
        e.preventDefault()
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: "POST",
            body:JSON.stringify(loginDetails),
            headers: {"Content-Type" : "application/json"}
        })
          .then((res) => res.json())
          .then((res) => login(res.token))
          .catch((err) => console.log(err))
        
        
    }

    const{username,password} = loginDetails

    return (
         
            <form onSubmit={submitLogin}>
           <input name=  "username" type="text" placeholder="username" value={username} onChange = {loginChange}/>
           <input name="password" type="text" placeholder = "password" value = {password} onChange = {loginChange}/>

           <input type="submit" />
           </form> 
       
    )
}

