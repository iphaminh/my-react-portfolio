import React from 'react';
import './Contact.css';  // Ensure the path is correct

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="form-container">
        <form className="contact-form">
          <fieldset id="sign_up" className="form-fieldset">
            <legend className="form-legend">Send me a message</legend>
            <div className="input-group">
              <label className="input-label" htmlFor="name">Your name</label>
              <input className="input-text" type="text" name="name" id="name" required />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="email-address">Email</label>
              <input className="input-text" type="email" name="email-address" id="email-address" required />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="message">Message</label>
              <textarea className="input-textarea" rows="10" name="message" id="message"></textarea>
            </div>
          </fieldset>
          <div className="submit-button-container">
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
