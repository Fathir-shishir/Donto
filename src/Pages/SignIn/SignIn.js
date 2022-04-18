import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import AuthWithSocial from '../AuthWithSocial/AuthWithSocial';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending, eError] = useSendPasswordResetEmail(
      auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from, { replace: true });
    }
    const resetPassword =(event)=>{
      if(email){
        sendPasswordResetEmail(email)
        toast("Email send!")
      }
    }
 const handelEmailOnblur =(event)=>{
    setEmail(event.target.value)
 }
 const handelPasswordOnblur =(event)=>{
    setPassword(event.target.value)
 }
 const handleSubmitForm =(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
    console.log(user)
 }
    return (
        <div className='vh-100'>
            <Form onSubmit={handleSubmitForm} className='w-50 d-block mx-auto mt-5'>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
   <Form.Control onBlur={handelEmailOnblur} required type="email"   placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handelPasswordOnblur} required type="password" placeholder="Password" />
  </Form.Group>
  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
   <button className='btn btn-link' onClick={resetPassword} > Forget Password?</button>
  <div className='mt-2'>
      <p>Do't have account? <Link to="/signUp">  Please Sign Up</Link></p>
      
  </div>
  <ToastContainer />
</Form>

        </div>
        
        
    );
};

export default SignIn;