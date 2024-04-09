import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Usersform from "./pages/Usersform";
import CrudUsers from "./pages/CrudUsers";
import EdiUser from "./pages/EditUser";

const Root=()=>{


    return(
    <>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/users" element={<Usersform/>}/>
        <Route path="/crud" element={<CrudUsers/>}/>
        <Route path="/edit/:id" element={<EdiUser/>}/>
    </Routes>
    </>
    )
}

export default Root;