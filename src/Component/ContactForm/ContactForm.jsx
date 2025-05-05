import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './ContactForm.css'

function ContactForm() {
    const { setToggleContact} = useContext(GlobalContext);
  return (
    <div className='contactForm'>
    <div className='Register-form'>
        <h2>Contact Us</h2>
        <p>Our Team Will Contact You On Same Details </p>
      <div className="Register-wrapper">
      <i className="fa-solid fa-xmark close-icon" onClick={() => setToggleContact(false)}></i>
      <form action="submit">
        <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='XYZ' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="name">Email</label>
            <input type="Email" placeholder='rendom@Gmail.com' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="Address">Contact Number</label>
            <input type="text" placeholder='+91 ----' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="Address">Address</label>
            <input type="text" placeholder='Your Address' />
        </div>
        </form>
        <button type='submit'>Submit</button>
      </div>
    </div>

    </div>
  )
}

export default ContactForm
