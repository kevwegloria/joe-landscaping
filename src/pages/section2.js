import React from 'react';
import { FaBriefcase, FaDollarSign, FaTools } from 'react-icons/fa';
import './index.css';


const Section_2 = () => {
  return (
    <div className='sec2-container'>
        <div className='sec2-text'>
        <h2>What we Specialize in.</h2> 
        </div>
    <div className='sec2'>
    <div className='sec2a'>
<FaTools className='tools' />
        <h5>Tradition, Innovation, <br/>Performance</h5>
        <p>Quality you deserve and dependability you can count on.</p>
      </div>
      <div className='sec2a'>
<FaBriefcase className='briefcase' />
<h5>Experience and <br/> Reputation</h5>
<p>It's the proof that we are the best for your project needs.</p>
      </div>
      <div className='sec2a'>
<FaDollarSign className='dollar' />
<h5>Full Service and <br/> Affordable Price</h5>
<p>We provide the best services at the most affordable price.</p>
      </div>
    </div>
    </div>
  )
}

export default Section_2
