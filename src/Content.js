import React from "react";
import Form from "./Form";
import Display from "./Display";

const Content = ({search,setSearch,handleSubmit,temp,status,location}) => {
  

  return (
    <div className="container-fluid screen">
      
        <div>
          <Form search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
        </div>

        {temp ? (
        <div className="display-item">
          <Display search={search}
                    temp={temp}
                    status={status}
                    location={location} />
        </div> ):<h3 style={{color:'white', backgroundColor:'black', marginTop:'20%'}}>Type the Location Above.</h3>}
      </div>
    
  );
};

export default Content;