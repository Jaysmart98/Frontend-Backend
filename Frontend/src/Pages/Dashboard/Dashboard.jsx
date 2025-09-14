import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, Router } from 'react-router-dom';

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
      <h1>Dashboard Page </h1>
    </div>
  )
}

export default Dashboard
