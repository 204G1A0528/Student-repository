import React from "react";
import  { useState } from "react";
import { Button } from "reactstrap";
import Toast,{handleErrorToast,handleSuccessToast} from "./Toast";
import { useNavigate,Route,Routes } from "react-router-dom";
import './Users.css'
import App from "../App";
const Login=()=>{
    let navigate=useNavigate();
    const[user,setUser]=useState({
        "email":"",
        "password":""
    });
    const log=async()=>{
        const res=await fetch(`http://localhost:8080/checkpass/${user.email}/${user.password}`);
        const data=await res.json();
        console.log(data);
      
            if (data?.message==="Incorrect Password")
            {
                handleErrorToast("Please enter a valid Password");
            }
            else if (data?.message==="Incorrect Email")
            {
                handleErrorToast("Please enter a valid Email");
            }
            else{
              handleSuccessToast("Successfully loged in")
            }
        }
   const handle=(e)=>{
       const{name,value}=e.target;
       setUser({...user,[name]:value})
       
   }


   return (
    <>
    
   

    
    <Toast></Toast>
    <div className="main">
    <div className="login">
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <label style={{ marginBottom: '5px', display: 'block' }}>Email</label>
            <input 
                type="text" 
                name="email" 
                value={user.email}  
                placeholder="Enter Email" 
                onChange={handle} 
            />
            <label style={{ marginBottom: '5px', display: 'block' }}>Password</label>
            <input 
                type="text" 
                name="password" 
                value={user.password} 
                placeholder="Enter Password" 
                className="inputlog"
                onChange={handle} 
            />

            <Button type="secondary" onClick={log}>Login</Button>
          </div>
        </div>
        </div>
    </>
)

}

export default Login;
