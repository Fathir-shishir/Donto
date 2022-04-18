import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import AuthWithSocial from '../AuthWithSocial/AuthWithSocial';

const SignIn = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from, { replace: true });
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
        <div>
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
  <div className='mt-2'>
      <p>Do't have account? <Link to="/signUp">  Please Sign Up</Link></p>
  </div>
</Form>

 <AuthWithSocial></AuthWithSocial>
        </div>
        
        
    );
};

export default SignIn;