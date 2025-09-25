import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css'

const Dashboard = () => {
   const [image, setimage] = useState(null)
    const [user, setUser] = useState (null)

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
    }, [])


   

      const uploadPicture = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          console.log(e.target.result);
          setimage(e.target.result)
        }
    }

     const uploadImage = () => {
      axios.patch("http://localhost:8005/upload/profile", {image}, {
        headers:{
          "Authorization": `bearer ${token}`
        }
     }).then((res) => {
        console.log(res.data);
        if (res.data?.user) {
          setUser(res.data.user)
        }
       }) . catch((err)=>{
        console.log(err);
        const errormessage = err.response.data?.message
        if (errormessage == "jwt expired") {
          localStorage.removeItem("auth_token")
        }
        
       })
    }



  return (
    <div>
      <Navbar/>
        <div className='container'>
            <h1>This is the dashboard page</h1>
            <input type="file" onChange={uploadPicture} />
            <button onClick={uploadImage}>Upload</button>
        </div>

      
          <h1>{user && user.username}</h1>
          <img style={{width:"200px", height:"200px"}} src={user && user.profilePicture} alt="" />
  
    </div>
  )
}

export default Dashboard
