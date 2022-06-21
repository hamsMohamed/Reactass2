import React from "react";

const Contact = () => {


    const history = useHistory();
    const redirectToAbout = () => {

      history.push("/about");
      
    };
  
    return(
        <div>
          <h1>contact Us</h1>

          <button className="btn btn-primary" onClick={() => redirectToAbout()}>
           Go To About Us
          </button>
        </div>
    );
};

export default Contact;