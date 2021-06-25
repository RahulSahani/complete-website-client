import React from 'react';
import './ContactUs.css'
import Zoom from 'react-reveal/Zoom';
import contactIcon from '../../Images/contactus.png';
const ContactUs = () => {
    return (
        <div className='container mb-5' >
           <h1 className="text-center text-white mb-3">Contact US</h1>
<div className="row">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={contactIcon} alt="" width='600px' />
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
    <Zoom>
    <div class="contact-container mt-5 mb-5">
  
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div>
</Zoom>
    </div>
</div>

        </div>
    );
};

export default ContactUs;