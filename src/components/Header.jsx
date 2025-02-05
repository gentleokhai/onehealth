import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-teal-600 font-semibold" : "text-black";

  return (
    <nav className="bg-white text-black py-4 px-6 fixed w-full top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-3xl font-extrabold tracking-wide text-black no-underline">
          DOHS
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li><a href="/" className={`hover:text-teal-500 no-underline ${isActive("/")}`}>Home</a></li>
          <li><a href="/about" className={`hover:text-teal-500 no-underline ${isActive("/about")}`}>About</a></li>
          <li><a href="/data" className={`hover:text-teal-500 no-underline ${isActive("/data")}`}>Surveillance Data</a></li>
          <li><a href="/stakeholder" className={`hover:text-teal-500 no-underline ${isActive("/stakeholder")}`}>Stakeholder Portal</a></li>
          <li><a href="/login" className={`hover:text-teal-500 no-underline ${isActive("/login")}`}>LogIn</a></li>

          {/* Call Info */}
          <li className="flex items-center space-x-1">
            <span className="text-gray-500">Call</span>
            <span className="font-bold text-teal-700">1800 425 3800</span>
            <span className="text-gray-500">or</span>
          </li>

          {/* Consult Online Button */}
          <li>
            <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
              Consult Online
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <ul className="text-lg font-semibold space-y-4">
            <li><a href="/" className={`block py-2 hover:text-teal-500 no-underline ${isActive("/")}`}>Home</a></li>
            <li><a href="/about" className={`block py-2 hover:text-teal-500 no-underline ${isActive("/about")}`}>About</a></li>
            <li><a href="/data" className={`block py-2 hover:text-teal-500 no-underline ${isActive("/data")}`}>Surveillance Data</a></li>
            <li><a href="/stakeholder" className={`block py-2 hover:text-teal-500 no-underline ${isActive("/stakeholder")}`}>Stakeholder Portal</a></li>
            <li><a href="/login" className={`block py-2 hover:text-teal-500 no-underline ${isActive("/login")}`}>LogIn</a></li>

            {/* Call Info */}
            <li className="py-2 text-gray-500">
              Call <span className="font-bold text-teal-700">1800 425 3800</span> or
            </li>

            {/* Consult Online Button */}
            <li>
              <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
                Consult Online
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
