import React from "react"
import {useNavigate} from "react-router-dom"

const Register= () => {
    const navigate = useNavigate();
    
    const[formDetails,setFormDetails] = React.useState({
        name:"",
        email:"",
        password:"",
        userName:"",
        number:"",
        discription:"",

    })
    
    const handelChange = (e) => {
        const{ name,value} = e.target
    
        setFormDetails({
            ...formDetails,
            [name]:value
        })
        
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {"content-Type " : "application/json" },
        }).then((res) =>res.json())
        .then((res) => console.log(res));
    }
    const goToLogin = () =>{
        navigate("/Login")

    }

    const{Name,email,password,username,number,discription} = formDetails


    return (
        <div>
        

        <form onSubmit={handelSubmit}>
            <input name ="Name" type="text" placeholder="Name" value={Name} onChange ={handelChange} />
           <input name=  "email" type="text" placeholder="Email" value={email} onChange = {handelChange}/>
           <input name="password" type="text" placeholder = "password" value = {password} onChange = {handelChange}/>
           <input name="username" type="text" placeholder = "username" value = {username} onChange = {handelChange}/>
           <input name="number" type="number" placeholder = "Mobile No." value = {number} onChange = {handelChange}/>
           <input name="discription" type="text" placeholder = "Description" value = {discription} onChange = {handelChange}/><br /><br />

           <input type="submit"  /><br /><br />

           <button onClick={goToLogin}>Redirect to the login page</button>
           
           </form>
           </div>
    )
}

export {Register}