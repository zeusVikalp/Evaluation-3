import React from "react"
import { useNavigate } from "react-router-dom";

export const AuthContexts = React.createContext();

export const AuthContextsProvider = ({children}) => {
    
    const[isAuth,setisAuth] = React.useState(false);
    const[token,setToken] = React.useState('')
    const navigate = useNavigate()

    const login = (token) => {
        setisAuth(true)
        setToken(token)
        navigate(`/`)

    }



    return <AuthContexts.Provider value = {{isAuth,login,token}}>{children}</AuthContexts.Provider>
}