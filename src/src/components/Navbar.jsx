import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-10 bg-[#3C3C3C] items-center flex px-5 justify-between text-white">
      <ul className="font-light text-[1rem] flex gap-5 items-center cursor-pointer">
        <Link to='/'>Home</Link>
        <li>Order Status</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
      </ul>

      <ul className="flex gap-5 items-center">
        <li>US Toll Free: +1 888 524 7161 </li>
        <li className="text-green-500">Live Chat Online</li>
        <li className="relative mr-5">
          <select name="lang" id="Lang" className="px-2 bg-transparent border-white">
            <option value="English">🇺🇸 English</option>
            <option value="Spanish">🇪🇸 Spanish</option>
            <option value="French">🇫🇷 French</option>
            <option value="German">🇩🇪 German</option>
            <option value="Italian">🇮🇹 Italian</option>
            <option value="Chinese">🇨🇳 Chinese</option>
            <option value="Japanese">🇯🇵 Japanese</option>
            {/* Add more language options and corresponding flags as needed */}
          </select>
        </li>
        <li className="relative">
          <select name="currency" id="Currency" className="px-2 bg-transparent border-white">
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="GBP">GBP £</option>
            <option value="JPY">JPY ¥</option>
            {/* Add more currency options as needed */}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
