import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../images/shishir(HQ).png'

const AboutMe = () => {
    return (
        <div className=' m-5'>
           <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>MD Fathir Ahmed Shishir</Card.Title>
    <Card.Text>
    The main objective when working as a developer is to be productive and deliver value to the company. As a developer or a CTO, the aim is to build practical applications that will be 100% successful. To achieve this, specific goals need to be set, which include: Enhancing your networking skills.
    </Card.Text>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default AboutMe;