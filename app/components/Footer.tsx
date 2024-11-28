import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} HastIndia. Promoting Indian Heritage.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-white">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
