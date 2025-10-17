import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
           <h2 className='font-bold mb-5'>Find Us On</h2> 
           <div>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 join-item justify-start"><FaFacebook size={22}/> Facebook</button>
  <button className="btn bg-base-100 join-item justify-start"><FaTwitter size={22} /> Twitter</button>
  <button className="btn bg-base-100 join-item justify-start "><FaSquareInstagram size={22} /> Instagram</button>
</div>
           </div>
        </div>
    );
};

export default FindUs;