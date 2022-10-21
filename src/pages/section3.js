import React from 'react';
import './index.css';
import Tree2 from './images/tree2.jpg'
import { FaPhotoVideo, FaPaintBrush, FaPeopleCarry, FaDotCircle } from 'react-icons/fa';

const Section3 = () => {
  return (
    <div className='sec3-container'>
        <div className='sec3-text'>
        <h2>Why work with us?</h2>
        </div>
      <div className='sec3'>
        <div className='sec3a'>
            <div className='sec3a1'>
                <div className="sec3a1-a">
                    <FaPaintBrush className='paintbrush' />
                    <h5>Creative Design</h5>
                    <p>Our expert crafstmen can transform your outdoor space into a 'wow' space. We have the experience and know how to design and build the perfect outdoor landscape.</p>
                </div>
                <div className="sec3a1-b">
                    <FaPeopleCarry  className='peoplecarry'/>
                    <h5>Thoughtful Installation</h5>
                    <p>We service both commercial and residential cutomers and are a full service design, installation and landscape maintenance company.</p>
                </div>
                <div className="sec3a1-c">
                    <FaPhotoVideo className='photo' />
                    <h5>Beautiful Landscapes</h5>
                <p>We understand that each part of a well-designed landscape has its own function. Let us create a landscape for your home and your business that is just right for you and your property.</p>
                </div>
            </div>
            <div className="sec3a2">
                <h2>Let's get Started.</h2>
                <p>Get a quote from the service that you want and you can expect to recieve a response within 1-2 Business Days.</p>
                <button>Get a Quote</button>
            </div>
        </div>
        <div className="sec3b">
            <div className="sec3b1">
                <p className='service'>We service both commercial and residential customers, and are a full service design, installation and landscape maintenance <br /> company</p>
                <div className="sec3b1-a">
                    <p><FaDotCircle className='circle' />Mulching/ Bed Maintenance</p>
                    <p><FaDotCircle className='circle'  />Brush Cleaning/ Removal</p>
                    <p><FaDotCircle className='circle' />Hardscaping</p>
                    <p><FaDotCircle className='circle'/>General Cleanup</p>
                    <p><FaDotCircle className='circle'/>Planting</p>
                    <p><FaDotCircle className='circle'/>Weed Wacking</p>
                </div>
                <div className="sec3b2">
            <img src={Tree2} alt="Tree2" />
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Section3
