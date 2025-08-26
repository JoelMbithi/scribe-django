import React, { useContext, useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";

import "./index.css";
import { UserContext } from "./components /UserContext";
import Navbar from "./components /Navbar/Navbar";
import Display from "./components /Display/Display";
import StarticDisplay from "./components /Display/StarticDisplay";
import OffersRooms from "./components /Display/OffersRooms";


function App() {

  const {user,setUser} = useContext(UserContext)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const storedUSer = localStorage.getItem("user")

    if(storedUSer){
      setUser(JSON.parse(storedUSer))
    }else{
      setUser(null)
     
 }
  setLoading(false)
 },[])

 if (loading) {
  return <div>Loading...</div>
 }
  return (
  
    <>
    <Navbar/>
    <StarticDisplay/>
    <Display/>
    <OffersRooms/>
    </>
  
  );
}

export default App;