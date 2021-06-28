import * as React from "react";

export const About: React.FunctionComponent<{ data?: any }> = (props) => {
  const name = props.data.name;


  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
  
        </div>
        <div className="nine columns main-col">
          <h2>About Us</h2>

          <p>Info</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
 
                <br />
   
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
