import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Salima's Portfolio</h4>
            <p className="text-primary-100 mb-4">
              Commanding IT systems with clarity, strategy, and control.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-primary-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:example.com"
                className="text-white hover:text-primary-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-100 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-primary-100 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-primary-100 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-4">Contact</h4>
            <p className="text-primary-100 mb-2">
              <strong>Email:</strong> Salima2025@example.com
            </p>
            <p className="text-primary-100 mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-primary-100 mb-2">
              <strong>Location:</strong> New York, NY
            </p>
            <Link to="/contact" className="inline-flex items-center text-white hover:text-primary-200 transition-colors mt-2">
              <span className="mr-2">Contact Me</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-8 pt-8 text-center">
          <p className="text-primary-100">
            &copy; {currentYear} Salima Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;