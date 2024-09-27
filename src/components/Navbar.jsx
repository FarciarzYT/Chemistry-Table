import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Info, Mail, Eye } from 'lucide-react';
import ImageAd from '../assets/Reklama.jpg';
import ImageAward from '../assets/award.jpg';
import './Styles/Fonts.css'; 



const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed h-screen z-50">
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-16 bg-gray-800 text-white rounded-r-md transition-transform duration-300 ${
          isVisible ? 'translate-x-60' : ''
        }`}
        onClick={toggleVisibility}
        aria-label={isVisible ? 'Zamknij menu' : 'Otwórz menu'}
      >
        {isVisible ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>
      <nav
        className={` fixed left-0 top-0 h-full w-60 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="list-none p-0 mt-8 cursor-pointer select-none">
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200 flex items-center">
            <Home className="w-5 h-5 mr-3" />
            <span>Periodic Table </span>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200 flex items-center">
            <Eye className="w-5 h-5 mr-3" />
            <span>Show 3D Model</span>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200 flex items-center">
            <Info className="w-5 h-5 mr-3" />
            <span>About Project</span>
          </li>
          <li className="p-4 hover:bg-gray-700 transition-colors duration-200 flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            <span>About</span>
          </li>
        </ul>
        <img src={ImageAd} alt="2BT the best Programer class everexisting" className="mt-4 mb-8 w-full h-auto rounded-lg select-none" />
        <h2 className="text-center text-xl bold italic select-none">Future Hacathon 2024 Winners</h2>
        <img src={ImageAward} alt="Hacathon 2024 Winners" className="mt-4 w-full h-auto rounded select-none" />
      </nav>
    </div>
  );
};

export default Navbar;