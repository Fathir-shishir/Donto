import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import CustomLink from './CustomLink/CustomLink';
import './Home.css'
import Nav from './Nav/Nav';

const Home = () => {
    const[services,setServices] =useServices()
    const newservices= services.slice(0,3)
    return (
        
        <div>
        <div>
            
        </div>

        <div className='bg-home py-5'>
        <div className='row container-fluid py-3 '>

        
       <div className="col-md-6 ">
           <div >
           <h3>Better Life Through</h3>
           <h1>Better Dentistry</h1>
           <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
           <div className="btn-header d-flex ">
               <button className='btn btn-primary mx-2'>Appoinment</button>
               <button className='btn btn-primary'>Learn More</button>
           </div>
           </div>
       </div>

       <div className="col-md-6 mx-auto text-center d-flex">
           <div className=''>
                <img src="https://donto-react.netlify.app/static/media/woman-brush.c4158ac5.png" alt="" />
           </div>
           <div>
           <img className='img-fluid' src="https://donto-react.netlify.app/static/media/hero-theeth.54c2c4e9.png" alt="" />
           </div>
           <div>
                <img src="https://donto-react.netlify.app/static/media/doctorfinding.c2532ac3.png" alt="" />
           </div>
       </div>
       </div>
       </div>
       <div className='container mt-4'>
        <div className='services-container'>
            {
                newservices.map(service=><Service 
                key={service.id}
                service={service}
                ></Service>)
            }
            
         </div>
            
        </div>
        <div className=' m-4 text-center'>
              <CustomLink className='btn btn-primary text-center ' to='/services'> See All Services</CustomLink>
            </div>
        </div>

    );
};

export default Home;