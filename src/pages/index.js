import React from 'react';
import './index.css';
import Mytree from './images/mytree.png';

const Home = () => {
  return (
    <div className='heading'>
      <div className='head-a'>
      <h1>Offering Quality work at a fair <br /> price to the Cape Cod area.</h1>
      <p>Our expert craftsmen can transform your outdoor space into a "wow" space. We have the experience and know-how to design and build the perfect outdoor landscape.</p>
<button>Work with us</button>
      </div>
      <div className='head-b'>
<img src={Mytree} alt="My tree" />
      </div>
    </div>
   
  )
}

export default Home
