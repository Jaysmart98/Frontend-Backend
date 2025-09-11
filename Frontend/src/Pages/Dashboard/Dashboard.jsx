import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

  const token = localStorage.getItem("auth.token")

  useEffect (() =>{
    axios.get("http://localhost:8005/verify", {
      headers:{
        "Authorization": `bearer ${token}`
      }
    }) .then((res)=>{
      console.log(res)
    })
    })

  return (
    <div>
      <h1>Dashboard Page </h1>
    </div>
  )
}

export default Dashboard
