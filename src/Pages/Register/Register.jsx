import React from 'react'

function Register() {
  return (
    <div className='Register-form'>
      <div className="Register-wrapper">
        <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Type here' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="name">Email</label>
            <input type="Email" placeholder='Type here' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="Address">Contact Number</label>
            <input type="text" placeholder='Type here' />
        </div>
        <div className="input-wrapper">
            <label htmlFor="Address">Address</label>
            <input type="text" placeholder='Type here' />
        </div>
      </div>
    </div>
  )
}

export default Register
