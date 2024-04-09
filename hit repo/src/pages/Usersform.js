import React, { useEffect, useState } from "react";

import './Users.css'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap"; // Import Modal component from reactstrap
import { useNavigate } from "react-router-dom";
const Usersform=()=>{
     
  let navigate=useNavigate();
  const[modal,setmodal]=useState(false);
    const[user,setUser]=useState(
        {
            name: "",
            email: "",
            phone:null
        }
    );
    // const[email,setemail]=useState();
    // const[num,setnum]=useState();

    const handelInput=(e)=>{
             e.preventDefault();
       const{name,value}=e.target;
       console.log(name, value)
       setUser({ ...user, [name]: value });
    }
  
    const handledata = async () => {
      if (!user.name || !user.email || !user.phone) {
        alert("Please fill in all the fields");
        return;
    }

        const post = await fetch('http://localhost:8080/postdata', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    
        if (post.ok) {
            console.log('Form submitted successfully!');    
            setUser({ name: "", email: "", phone: "" });
            setmodal(true)
            navigate('/users');
        } else {
            console.error('Form submission failed!');
        }
    }
    
    

    useEffect(()=>{
      //  handledata();

    },[])

    console.log(user.name);

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
        <Modal isOpen={modal} toggle={() => setmodal(!modal)}> {/* Render the Modal component */}
                <ModalBody>
                    Data submitted successfully!
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setmodal(!modal)}>OK</Button>
                </ModalFooter>
            </Modal>


        </>
    )
}

export default Usersform;