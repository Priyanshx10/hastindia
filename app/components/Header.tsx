import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <a href="#home">HastIndia</a>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#products" className="hover:text-gray-400">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {/* Add a hamburger menu icon */}☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
