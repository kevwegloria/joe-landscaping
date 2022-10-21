import React from 'react'
import './index.css';
import { FaArrowRight, FaMailBulk, FaPhone, FaTree } from 'react-icons/fa';


const Section4 = () => {
  return (
    <div>
      <div className="sec4">
        <div className="sec4a">
        <h5><FaTree className='tree-a'/> Joe Landscaping</h5>
        <p>We're proud of our contribution towards building the future, ground up! Our landscaping company is ready to complete any kind of project for any type of commercial and residential client!</p>
        </div>
        <div className="sec4b">
            <h5>Contact Us</h5>
            <p><FaArrowRight /> Tersmouth, MA 00275</p>
            <p><FaMailBulk /> contact @jland.com</p>
            <p><FaPhone /> 0904 433-3456</p>
        </div>
        <div className="sec4c">
            <h5>Social Media</h5>
            <p>Facebook</p>
         
        </div>
        <div className="sec4d">
<h5>Working Hours</h5>
<p>Mon-Sat</p>
<p>Working Hours 7:00AM - 9:00PM</p>
        </div>
      </div>
    </div>
  )
}

export default Section4
