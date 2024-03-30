import React from 'react';
import payment from '../media/payment.png';
import securePay from '../media/secure_pay.png';
import Group_5 from '../media/Group 5.png';

const Footer = () => {
  return (
    <footer className="bg-light text-dark text-center pt-1">
      <div className="container footer-sec">
        <div className="row d-flex justify-content-around align-items-center text-sm text-left m-3">

          <div className="col-md-2 mb-3">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <ul className="list-unstyled">
              <li>Our Policy</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <p className="font-weight-bold">Payment Options</p>
            <img src={payment} width={200} height={40} alt="payment" />
            <p className='text-xs mt-2 text-secondary'>Products are not appeared on your credit card statement</p>
          </div>

          <div className="col-md-2 mb-3">
            <p className="font-weight-bold">Secure Payment Process</p>
            <img src={securePay} width={200} height={40} alt="secure_payment" />
            <p className='text-xs mt-2 text-secondary'>See links to the certificates at Secure Checkout Page</p>
          </div>

          <div className="col-md-2 mb-3">
            <p className="font-weight-bold text-xs text-secondary pb-2">Subscribe to the news</p>
            <div className='d-flex'>
              <input type='email' placeholder='Enter email' />
              <button type='button' className='btn border-dark text-xs'>Submit</button>
            </div>
            <div className='flex justify-content-around mt-2'>
              <p className="font-weight-bold text-xs text-secondary">Mobile Version</p>
              <img src={Group_5} width={100} height={1} alt="group" />
            </div>
          </div>
        </div>

        <div className="copy-right-sec mt-1 p-3">
          <p className="copy-right text-xs">Copyright © safe-easy-online.com. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
