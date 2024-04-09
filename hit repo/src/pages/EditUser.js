import React from "react";
import { useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
const EdiUser=()=>{

    let navigate=useNavigate();

    const{id}=useParams();
    const[user,setuser]=useState({
        name:"",
        email:"",
        phone:null
    })

    const handledata = async () => {
        const post = await fetch(`http://localhost:8080/put/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    
        if (post.ok) {
            console.log('Form submitted successfully!');    
           // setuser({ name: "", email: "", phone: "" });
            navigate('/crud');
        } else {
            console.error('Form submission failed!');
        }
    }
    const handelInput=(e)=>{

        e.preventDefault();
        const{name,value}=e.target;
        setuser({ ...user, [name]: value });
    }
    const listUsers = async () => {
        try {
            const res = await fetch(`http://localhost:8080/getbyid?id=${id}`);
            if (res.ok) {
                const data = await res.json(); // Parse response body as JSON
                setuser(data); // Assuming setUsers is a state updater function
            } else {
                console.log("Unable to get data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

    useEffect(()=>{
      listUsers();

    },[])
    return(
        <>
       <div className="user-form" >
            <div className="inside">

            <h2 style={{textAlign:"center"}}>Users Form</h2>
                  <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">EMail</label>
                    <input type="text" className="form-control" id="name" name="email" value={user.email} onChange={handelInput} />
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="name" name="phone" value={user.phone} onChange={handelInput} />
                  </div>
            
            <Button onClick={handledata} style={{alignItems:"center"}}>submit</Button>

            </div>
        </div>
        </>
    )
}

export default EdiUser;