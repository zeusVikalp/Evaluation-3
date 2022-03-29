import React from "react"
import {useNavigate} from "react-router-dom"

const Register= () => {
   
    
    const[formDetails,setFormDetails] = React.useState({
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:"",

    })
    const navigate = useNavigate();
    
    const handelChange = (e) => {
        const{ name,value} = e.target
    
        setFormDetails({
            ...formDetails,
            [name]:value
        });
        
    };

    
    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log(formDetails)
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {"content-Type " : "application/json" }
        }).then((res) =>res.json())
        .then((res) => console.log(res))
        .catch((err)=>console.log(err))
        
    }
    const goToLogin = () =>{
        navigate("/Login")

    }
  

    const{name,email,password,username,mobile,description} = formDetails


    return (
        
        

        <form onSubmit={handelSubmit}>
            <input name ="name" type="text" placeholder="Name" value={name} onChange ={handelChange} /> <br />
           <input name= "email" type="text" placeholder="Email" value={email} onChange = {handelChange}/><br />
           <input name="password" type="text" placeholder = "password" value = {password} onChange = {handelChange}/><br />
           <input name="username" type="text" placeholder = "username" value = {username} onChange = {handelChange}/><br />
           <input name="mobile" type="number" placeholder = "Mobile No." value = {mobile} onChange = {handelChange}/><br />
           <input name="description" type="text" placeholder = "Description" value = {description} onChange = {handelChange}/><br /><br />

           <input type="submit"  /><br /><br />

           <button onClick={goToLogin}>Redirect to the login page</button>
           
           </form>
           
    )
}

export {Register}