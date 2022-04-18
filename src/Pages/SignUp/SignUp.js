import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import AuthWithSocial from '../AuthWithSocial/AuthWithSocial';
import { Link } from 'react-router-dom';


const SignUp = () => {
const [name,setName]= useState("")
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')
const [confirmpassword,setConfirmpassword] = useState('')
const [isChecked,setChecked] = useState(false)
const [passerror,setPasserror] = useState('')

const [sendEmailVerification, sending, error] = useSendEmailVerification(
  auth
);

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  Eerror,
] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

   const handelNameOnblur =(event)=>{
    setName(event.target.value)
      
   }
   const handelEmailOnblur =(event)=>{
      setEmail(event.target.value)
      
   }
   const handelPasswordOnblur =(event)=>{
    setPassword(event.target.value)
      
   }
   const handelConfirmPasswordOnblur =(event)=>{
    setConfirmpassword(event.target.value)
      
   }
 

   const handleSubmitForm=(event)=>{
     event.preventDefault()
     if( password === confirmpassword ){
      createUserWithEmailAndPassword(email, password)
      
      
      
     }
     else{
      setPasserror('Your passWord did not match')
     }
   
     
    
   }

    return (
        <div>
            <div>
              <p className='text-center'>{passerror}</p>
            </div>
        <Form onSubmit={handleSubmitForm} className='w-50 d-block mx-auto mt-5'>
       <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control onBlur={handelNameOnblur}  type="text" placeholder="Your Name" required />
  </Form.Group>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
   <Form.Control onBlur={handelEmailOnblur} required type="email"   placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handelPasswordOnblur} required type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handelConfirmPasswordOnblur} required type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check  onClick={()=>setChecked(!isChecked)}
    className={isChecked ? 'text-primary': 'text-danger'}
     type="checkbox" label="Terms and condition" />
  </Form.Group>
  <Button 
    disabled={!isChecked}
   variant="primary" type="submit">
    Submit
  </Button>
  <div className='mt-2'>
      <p>Alread have account? <Link to="/signIn">  Please Sign In</Link></p>
  </div>
</Form>
 <AuthWithSocial></AuthWithSocial>

        </div>
    );
};

export default SignUp;