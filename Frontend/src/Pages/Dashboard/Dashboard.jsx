import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css'

const Dashboard = () => {

   const navigate = useNavigate();

  const token = localStorage.getItem("auth_token")

  useEffect (() =>{
    axios.get("http://localhost:8005/verify", {
      headers:{
        "Authorization": `bearer ${token}`
      }
    }) .then((res)=>{
      console.log(res)
    }) .catch ((err) => {
      console.log(err);
      const errormessage = err.response.data.message
      if(errormessage == "jwt expired") {
        localStorage.removeItem("auth_token")
        navigate("/signin")
      }
    })
    })

  return (
    <div>
      <Navbar/>
        <div className='container'>
            
        </div>
    </div>
  )
}

export default Dashboard
