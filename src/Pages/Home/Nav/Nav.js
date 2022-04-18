import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Nav.css'

const Nav = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='container'>
        <nav className='bg-white d-flex justify-content-center align-items-center row p-2'>

        <div className="col-lg-4">
           <h1>DANTA</h1>
        </div>
        <div className="col-lg-8 d-flex justify-content-end">
        <CustomLink className="mx-2" to="/">Home</CustomLink>
        <CustomLink  className="mx-2" to="/services">Services</CustomLink>
        <CustomLink  className="mx-2" to="/appointment">Appointment</CustomLink>
        <CustomLink  className="mx-2" to="/about">about</CustomLink>
        {
            user? <button onClick={()=>signOut(auth)} className="mx-2 btn btn-link p-0 m-0" > Sign Up(
                <small>{user.email}</small>
            ) 
            </button> :
            <CustomLink  className="mx-2" to="/signIn">Sign In</CustomLink>
        }
        
        
        
        </div>
        
        </nav>
        </div>
        
    );
};

export default Nav;