import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import Input from '../../PrimaryComponents/Input/Input'
import Button from '../../PrimaryComponents/Button/Button'
import { useNavigate, Router } from 'react-router-dom';


const Signin = () => {

   const navigate = useNavigate();

   const [loading, setloading] = useState(false)

     const [userdetail, setUserdetail] = useState({
            email: "",
            password: ""
        })

     const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        const name = e.target.name;
        const value = e.target.value
        setUserdetail({...userdetail,[name]:value})
    }
 
        
    const Login = () => {
      setloading(true)

        axios.post("http://localhost:8005/login", userdetail)
        .then((res)=>{
            console.log(res);
             toast.success(res.data?.message);
             localStorage.setItem("auth_token", res.data.token)
             navigate("/dashboard");
        }) .catch ((err) => {
            console.log(err);
            let errormessage = err.response.data?.message
            toast.error(errormessage)
        }) .finally(()=>{
          setloading(false)
        })
        };


  return (
    <div>
        <div className='w-5 mx-auto py-3 px-5'>
                <h1 className='text-center mt-3'>Sign In</h1>
                <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange}/>
                <Input name={"password"} placeholder={"Enter your Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange}/>
                <Button loading={loading} text={"Login"} style={"btn btn-primary mt-3"} onClick={Login}/>
              </div>
    </div>
  )
}

export default Signin
