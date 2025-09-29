import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import Input from '../../PrimaryComponents/Input/Input'
import Button from '../../PrimaryComponents/Button/Button'
import { useNavigate, Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Signin.css'


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

        axios.post("https://pe-backend-liard.vercel.app/login", userdetail)
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
    <div id='body'>
        <div className='w-5 mx-auto py-3 px-5'> 
              <h1 className='text-center mt-3'>Login</h1>
              <p className='text-center mt-3'>Don't have an account? <Link href="https://pe-frontend-chi.vercel.app/signup">Sign Up</Link> </p>
                <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange}/>
                <Input name={"password"} placeholder={"Enter your Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={"Password"}/>
                <Button loading={loading} text={"Login"} style={"btn btn-primary mt-3"} onClick={Login}/> <br />
                <p><Link href="">Forget Password</Link> </p> 
                <hr />
                
                <p id='createText'>Or sign in using:</p>
                <button id='GoogleBtn' className='btn btn-white mt-4 mb-2 border-dark'> Continue with Google</button>
                <Button id="FacebookBTN" text={"Continue with Facebook"} style={"btn mt-4 mb-2 border-dark"}/>
              </div>
    </div>
  )
}

export default Signin
