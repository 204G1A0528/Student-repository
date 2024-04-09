import React, { useEffect, useState } from "react";
import './Users.css'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
const CrudUsers=()=>{
    const pages=5;
    let navigate=useNavigate();
    let id;
    const[users,setusers]=useState();
    const[current,setcurrent]=useState(1);
    const[totalPages,setotal]=useState(0)


    const listUsers = async () => {
        try {
            const res = await fetch('http://localhost:8080/getall');
            if (res.ok) {
                const data = await res.json(); // Parse response body as JSON
                  const total = Math.ceil(data.length / pages);
                 setotal(total);
                setusers(data); // Assuming setUsers is a state updater function
            } else {
                console.log("Unable to get data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
  
    const handelDelete=async(id)=>{
        const post = await fetch(`http://localhost:8080/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    
        if (post.ok) {
            console.log('deleted successfully!');    
             setusers(users.filter((item)=>item.id!==id));
        } else {
            console.error('Form submission failed!');
        }
    }
    console.log(current);

   
    useEffect(() => {
        listUsers();
    }, []);
    
    const handleprevious=()=>{
        setcurrent(current-1)

    }

    const handleNext=()=>{
        setcurrent(current+1)

    }
   

    const startIndex=(current-1)* pages;
    const EndIndex=startIndex+pages;
    const displayedUsers = users?.slice(startIndex, EndIndex);



    return(
        <>
       <div className="list">
        <h2>List of Users</h2>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {displayedUsers?.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}{console.log(index)}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                    <Link to={`/edit/${item.id}`}>
                      <Button>Update</Button>
                    </Link>
                    <Button  onClick={() => handelDelete(item.id)}>Delete</Button>
                  
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <div>
        <Button onClick={handleprevious} disabled={current===1}>Previous</Button>
        <span>{current} of {totalPages}</span>
        <Button onClick={handleNext} disabled={current===totalPages}>Next</Button>
    </div>
</div>


        </>
    )
}


export default CrudUsers;