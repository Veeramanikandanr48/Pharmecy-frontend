import React from "react";
import { FaFolder } from "react-icons/fa"; // Import the FaFolder icon
import card_content from '../media/card_content.png';
import { Link} from 'react-router-dom';

const Sidebar = () => {

  // Updated categories data with a common folder icon
  const categories = [
    "Bestsellers", "COVID-19", "Allergy", "Anti Viral", "Anti-Depressants",
    "Antibacterial", "Antibiotics", "Arthritis", "Asthma", "Birth Control",
    "Cancer", "Blood Pressure", "Cholesterol", "Cardiovascular", "Diabetes",
    "Diuretics", "Erectile Dysfunction", "Eye Drop", "Gastro Health", "Hair Loss",
    "General Health", "Hepatitis C Virus (HCV)", "Herbals", "Hormones", "HIV",
    "Men's ED Packs", "Men's Health", "Mental Illness", "Motion Sickness",
    "Muscle Relaxant", "Pain Relief", "Quit Smoking", "Skin Care", "Women's Health",
    "Weight Loss"
  ];

  return (
    <div className="flex flex-col min-h-screen p-5 gap-3">
      <h1 className="border-b py-2">Categories List</h1>
      <ul className="flex flex-col text-xs gap-2 text-gray-600">
        {categories.map((category, index) => (
          <li key={index} className="cursor-pointer flex items-center gap-1">
            <FaFolder size={20} color="#007BFF" />
            <Link to={`/category/${category}`}>{category}</Link>
            {/* Add font-bold class if the category matches the current category */}
          </li>
        ))}
      </ul>
      <h1 className="border-b py-2">Shipping option</h1>
      <img src={card_content} alt="card-c" className="mb-5"/>
    </div>
  );
};

export default Sidebar;
