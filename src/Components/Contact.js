import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Search Disease Solution</h1>
      {/* <h1 className="primary-heading">Let Us Help You</h1> */}
      <div className="contact-form-container">
        <input type="text" placeholder="Type your disease here" />
        <button className="secondary-button">Search</button>
      </div>
    </div>
  );
};

export default Contact;
