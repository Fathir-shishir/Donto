import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div>
           
           <Form className='w-50 d-block mx-auto mt-5'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Terms and condition" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
    );
};

export default SignUp;