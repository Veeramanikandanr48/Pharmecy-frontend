import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-10 bg-[#3C3C3C] flex items-center px-6 justify-between text-white">
      <ul className="flex gap-8 items-center text-xs">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/order-status">Order Status</NavItem>
        <NavItem to="/faq">FAQ</NavItem>
        <NavItem to="/contact-us">Contact Us</NavItem>
        <NavItem to="/testimonials">Testimonials</NavItem>
      </ul>

      <ul className="flex items-center gap-8">
        <li className="text-sm font-medium">
          US Toll Free: <span className="text-green-500">+1 888 524 7161</span>
        </li>
        <li className="text-sm font-medium text-green-500 hover:text-gray-400 transition duration-300">
          Live Chat Online
        </li>
        <li className="relative">
          <select
            name="lang"
            id="Lang"
            className="px-2 bg-white text-black border border-white text-sm font-medium focus:outline-none focus:border-gray-400"
          >
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
          <select
            name="currency"
            id="Currency"
            className="px-2 bg-white text-black border border-white text-sm font-medium focus:outline-none focus:border-gray-400"
          >
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

const NavItem = ({ to, children }) => {
  return (
    <>
      <li className="text-xs font-medium">
        <Link to={to}>{children}</Link>
      </li>
      <div className="h-6 border-r border-white"></div>
    </>
  );
};


export default Navbar;
