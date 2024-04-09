import React, { useEffect } from 'react';
import { useState } from 'react';
import Axios from "axios";
import Dashboard from './Dashboard';


function Log()
{
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[hand,sethandle]=useState(false);
const[check,setcheck]=useState(false)
const Handle=()=>{
  setcheck(!check)
}

useEffect (async()=>{
  console.log("hi")

  const res=await  Axios.get('http://localhost:8080/api/v1/users')
    console.log(res.data)
  } 
  
  ,[check]);
return(
    <>
       <label>Login</label>
        <label>Email</label>
        <input  onClick={(e)=>setEmail(e.target.value)} ></input>
        <label>password</label>
        <input  onClick={(e)=>setPassword(e.target.value)}></input>
        <button onClick={Handle}>Submit</button>
        <Dashboard />
        <div>
      {hand ? (
         <Dashboard />
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
    </>
)
}
export default Log;