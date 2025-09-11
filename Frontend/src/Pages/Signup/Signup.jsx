import React, {useState} from 'react'
import Input from '../../PrimaryComponents/Input/Input'
import Button from '../../PrimaryComponents/Button/Button'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate, Router } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [loading, setloading] = useState(false)

    const [userdetails, setUserdetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        const name = e.target.name;
        const value = e.target.value
        setUserdetails({...userdetails,[name]:value})
    }

    const Register = () => {
      setloading(true)
      console.log(userdetails)
          axios.post("http://localhost:8005/signup", userdetails)
        .then((res)=>{
            console.log(res);
             toast.success(res.data?.message),
              navigate("/signin");
        }) .catch ((err) => {
            console.log(err);
            let errormessage = err.response.data?.message
            toast.error(errormessage)
        }) .finally(()=>{
          setloading(false)
        })
    }


  return (
    <div>
      <div className='w-5 mx-auto py-3 px-5'>
        <h1 className='text-center mt-3'>Sign up</h1>
        <Input name={"username"} placeholder={"Enter a Username"} type={"text"} style={"form-control mt-3"} onChange={handleInputChange}/>
        <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange}/>
        <Input name={"password"} placeholder={"Create your Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange}/>
        <Button loading={loading} text={"Sign Up"} style={"btn btn-primary mt-3"} onClick={Register}/>
      </div>
    </div>
  )
}

export default Signup
