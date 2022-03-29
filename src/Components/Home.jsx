import React from "react"
import { useEffect } from "react"
import { AuthContexts } from "../Contexts/AuthContexts"

const Home = () => {
    const[userList,setuserList] = React.useState([])
    const{token,username,isAuth} = React.useContext(AuthContexts)

    React.useEffect(() =>{
        if(isAuth){
            getData()
        }
    },[])

    const getData =()=>{
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers: { "Authorization": `Bearer ${token}`}
        })
         .then((res) => res.json())
         .then((res) =>setuserList(res))
         .catch((err) => console.log(err))

    }
    console.log(userList)

    return (
     <div>Home</div>
    )
}

export {Home}