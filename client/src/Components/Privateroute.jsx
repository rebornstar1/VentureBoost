import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"
import React from "react"

function Privateroute() {
  const {currentUser} = useSelector(state => state.user)
  return currentUser?<Outlet/>:<Navigate to='/signin'/>;
}

export default Privateroute;
