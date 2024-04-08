import React from 'react';
import payment from '../media/payment.png';
import securePay from '../media/secure_pay.png';
import Group_5 from '../media/Group 5.png';

const Footer = () => {
  return (
    <footer className="bg-light text-dark text-center py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-sm text-left">

          {/* Home, Contact Us, About Us */}
          <div className="text-sm">
            <ul className="list-none">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Our Policy, Terms & Conditions, Sitemap */}
          <div className="text-sm">
            <ul className="list-none">
              <li>Our Policy</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="text-xs">
            <p className="font-bold">Payment Options</p>
            <img src={payment} width={200} height={40} alt="payment" className="mt-2 mx-auto" />
            <p className="text-xs text-secondary mt-2">Products are not appeared on your credit card statement</p>
          </div>

          {/* Secure Payment Process */}
          <div className="text-xs">
            <p className="font-bold">Secure Payment Process</p>
            <img src={securePay} width={200} height={40} alt="secure_payment" className="mt-2 mx-auto" />
            <p className="text-xs text-secondary mt-2">See links to the certificates at Secure Checkout Page</p>
          </div>

          {/* Subscribe to the news and Mobile Version (Hidden in Mobile View) */}
          <div className="hidden md:block">
            <div className="mb-2">
              <p className="font-bold text-xs text-secondary">Subscribe to the news</p>
              <div className="flex">
                <input type="email" placeholder="Enter email" className="border border-gray-300 px-2 py-1 text-xs w-28" />
                <button type="button" className="btn border-dark text-xs ml-2">Submit</button>
              </div>
              <div className="flex justify-center mt-2">
                <p className="font-bold text-xs text-secondary">Mobile Version</p>
                <img src={Group_5} width={100} height={1} alt="group" className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Copy Right Section */}
        <div className="copy-right-sec mt-1">
          <p className="copy-right text-xs">Copyright © budgetmeds.com. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
