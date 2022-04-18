import React from 'react';

const Blogs = () => {
    return (
        <div className='container-fluid'>
            <div>
            <h1>Difference between authorization and authentication</h1>
            <p> The process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization</p>
            </div>
            <div>
                <h1> Why are you using firebase, What other options do you have to implement authentication?</h1>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc.</p>
            </div>
            <div>
                <h1> What other services does firebase provide other than authentication</h1>
                <p>There are many services which Firebase provides, Most useful of them are:
 <ul>
     <li>Cloud Firestore</li>
     <li>Cloud Functions</li>
     <li>Hosting</li>
     <li>Cloud Storage.</li>
     <li>Google Analytics.</li>
     <li>Predictions etc.</li>
 </ul>
</p>
            </div>
            
</div>
    );
};

export default Blogs;