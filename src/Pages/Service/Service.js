import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({service}) => {
    const{comment,price,picture,name} = service
    return (
        <div className=' '>
        {/* <div className=''>
            <img   src={picture} alt="" />
            <h1>{name}</h1>
        </div>
        <div className='review-details'>

        </div>
            <p>Rating : {price}</p>
            <p className=''>Comment :  {comment }</p> */}
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={picture} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {comment }
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  
</CardGroup>
        </div>
    );
};

export default Service;