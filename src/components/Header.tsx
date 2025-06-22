import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="bg-primary-500 text-white p-2 rounded">
            <ChevronRight size={24} />
          </div>
          <span className="text-xl font-bold text-primary-500">Salima's Portfolio</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/CsIm"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Customer Service and Incident Management
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col px-4 py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/CsIm"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
          >
            Customer Service & Incident Toolkit
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3 border-b border-gray-100'
                : 'nav-link py-3 border-b border-gray-100'
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-active py-3'
                : 'nav-link py-3'
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;