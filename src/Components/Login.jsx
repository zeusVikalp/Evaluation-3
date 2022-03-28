import React from "react"

const Login = () => {
    

    return (
       <div>
           <input name=  "email" type="text" placeholder="Email" value={email} onChange = {handelChange}/>
           <input name="password" type="text" placeholder = "password" value = {password} onChange = {handelChange}/>

           <input type="submit" />
       </div>
    )
}

export {Login}