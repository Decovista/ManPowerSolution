import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./ContactForm.css";

function ContactForm() {
  const { setToggleContact } = useContext(GlobalContext);

  return (
    <div className="contactForm">
      <div className="Register-form">
        <h2>Contact Us</h2>
        <p>Our Team Will Contact You On Same Details</p>
        <div className="Register-wrapper">
          <i
            className="fa-solid fa-xmark close-icon"
            onClick={() => setToggleContact(false)}
          ></i>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="42e10c3f-e523-42a9-be75-db290273c3ca"
            />

            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="XYZ"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="random@Gmail.com"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="+91 ----"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
