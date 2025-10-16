import React, {useState} from 'react'
import Input from '../../PrimaryComponents/Input/Input'
import Button from '../../PrimaryComponents/Button/Button'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate, Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Signup.css'

import GoogleSignInButton from '../../PrimaryComponents/GoogleSignInButton/GoogleSignInButton.jsx';

const Signup = () => {

  const navigate = useNavigate();

    // const [token, setToken] = useState(null);

  const [loading, setloading] = useState(false)

    const [userdetails, setUserdetails] = useState({
        username: "",
        email: "",
        password: ""
    })

  const handleCredentialResponse = (response) => {
    const idToken = response.credential;
    
    fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken }),
    })
    .then(res => res.json())
    .then(data => {
        console.log("Authentication successful:", data);
    })
    .catch(error => console.error("Auth error:", error));
};


    // const handleSignInSuccess = async (idToken) => {
    //       setToken(idToken);
    //       setUserStatus('Pending backend verification...');
    //       try {
    //         const response = await axios.post('/api/auth/google', { token : idToken });
    //         if (response.data.success) {
    //           setUserStatus(`Signed Up as: ${response.data.userName}`);
    //           toast.success('Google Sign Up successful!');
    //           navigate('/signin');
    //         }
    //       } catch (error) {
    //         console.error('Authentication failed:', error);
    //         setUserStatus('Sign In Failed');
    //       }
    //     };

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        const name = e.target.name;
        const value = e.target.value
        setUserdetails({...userdetails,[name]:value})
    }

    const Register = () => {
      setloading(true)
      console.log(userdetails)
          axios.post("https://pe-backend-liard.vercel.app/signup", userdetails)
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
    <div id='body'>
      <div className='w-5 mx-auto py-3 px-5'>
           {/* <p>Current Status: {userStatus}</p> */}
        <h1 className='text-center mt-3'>Create an Account</h1>
        <p className='text-center mt-3'>Already have an account?   <a href="https://pe-frontend-chi.vercel.app/signin">Sign In</a> </p>
        <Input name={"username"} placeholder={"Enter Username"} type={"text"} style={"form-control mt-3"} onChange={handleInputChange} label={"Username"}/>
        <Input name={"email"} placeholder={"Enter Email Address"} type={"email"} style={"form-control mt-3"} onChange={handleInputChange} label={"Email"}/>
        <Input name={"password"} placeholder={"Enter Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={'Password'}/>
        <Input name={"password"} placeholder={"Confirm Password"} type={"password"} style={"form-control mt-3"} onChange={handleInputChange} label={'Confirm Password'}/>
        <Button loading={loading} text={"Create Account"} style={"btn btn-dark mt-2 mb-2"} onClick={Register}/>
        <p>By creating account, you agree to our terms <Link href="">Terms of Service</Link> </p>
        <hr />
        <p id='createText'>Or create an account using</p>
        <GoogleSignInButton onSignInSuccess={handleCredentialResponse} id='GoogleBtn' className='btn btn-white mt-4 mb-2 border-dark'/>
        <Button id="FacebookBTN" text={"Continue with Facebook"} style={"btn mt-4 mb-2 border-dark"} onClick={Register}/>
      </div>
    </div>
  )
}

export default Signup
