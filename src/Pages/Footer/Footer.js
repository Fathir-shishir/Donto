import React from 'react';

const Footer = () => {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    return (
        <div className='text-center py-3 bg-dark'>
            <p className='text-white'>© Copyright by shishir : {year}</p>
        </div>
    );
};

export default Footer;