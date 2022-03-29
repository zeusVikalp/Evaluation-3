import React from "react"
import { useNavigate } from "react-router-dom";

export const AuthContexts = React.createContext();

export const AuthContextsProvider = ({children}) => {
    
    const[isAuth,setisAuth] = React.useState(false);
    const[token,setToken] = React.useState('')
    const[username,setUsername] = React.useState("")
    const navigate = useNavigate()

    const login = (token,username) => {
        setisAuth(true)
        setToken(token)
        setUsername(username)
        navigate(`/`)

    }



    return <AuthContexts.Provider value = {{isAuth,login,username,token}}>{children}</AuthContexts.Provider>
}