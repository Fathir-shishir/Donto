import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Nav.css'

const Nav = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='bg-head  '>
        <div className='container-fluid'>

        
        <nav className='d-flex justify-content-center align-items-center row p-2'>

        <div className="col-lg-4">
           <img src="https://donto-react.netlify.app/static/media/dentistry.d3c700d9.svg"  alt="" /> 
        </div>
        <div className="col-lg-8 d-flex justify-content-end">
        <CustomLink className="mx-2" to="/">Home</CustomLink>
        <CustomLink  className="mx-2" to="/services">Services</CustomLink>
        <CustomLink  className="mx-2" to="/appointment">Appointment</CustomLink>
        <CustomLink  className="mx-2" to="/about">about</CustomLink>
        <CustomLink  className="mx-2" to="/blogs">Blogs</CustomLink>
        {
            user? <button onClick={()=>signOut(auth)} className="mx-2 btn btn-link p-0 m-0" > Sign Out(
                <small>{user.email}</small>
            ) 
            </button> :
            <CustomLink  className="mx-2" to="/signIn">Sign In</CustomLink>
        }
        
        
        
        </div>
        
        </nav>
        </div>
        </div>
        
    );
};

export default Nav;