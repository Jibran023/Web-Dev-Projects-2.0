import React from 'react';
import './signup_details.css';
import { Button } from './Button.js';

function Signupdetails() {
  return (
    <div className='signup_container'>
        <div className='signup_info'>
            <p>SIGN UP HERE</p>
        </div>
        <div className='input_details'>
            <form>
                <label className='labels'>Full Name:</label>
                <input type='name' name='name' placeholder='Your Full Name' className='input' />
            </form>
            <form>
                <label className='labels'>Enter your email:</label>
                <input type='email' name='email' placeholder='Your Email Address' className='input' />
            </form>
            <form>
                <label className='labels'>Enter your Phone:</label>
                <input type='number' name='phone' placeholder='Your Phone Number' className='input' />
            </form>
            <div className='gender selection'>
                <label className='options_label'>Select your Gender:</label>
                <select className='combobox_entries input' id='combo-box'>
                    <option value=''>Select...</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
            <div className='date_of_birth'>
                <label className='date_of_birth_info'>Date of Birth:</label>
                <input type='date' className='input' />
            </div>
            <Button className='submit' buttonStyle='btn--outline'>SUBMIT</Button>
        </div>
    </div>
  );
}

export default Signupdetails;
