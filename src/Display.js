import React from 'react';

const Display = ({temp,status,location}) => {
  return (
    <div className='Display'>
    
    <h1>{location}</h1>
    
    <h2>{temp}°C</h2>
    
    
    <h3>{status}</h3>
    
    </div>
  );
};

export default Display;