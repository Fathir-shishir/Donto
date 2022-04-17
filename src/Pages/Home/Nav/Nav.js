import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Nav.css'

const Nav = () => {
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
        <CustomLink  className="mx-2" to="/signIn">Sign In</CustomLink>
        <CustomLink  className="mx-2" to="/signUp">Sign Up</CustomLink>
        </div>
        
        </nav>
        </div>
        
    );
};

export default Nav;