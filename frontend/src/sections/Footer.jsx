// components/Footer.jsx

import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">IEEE PAF-IAST</h3>
          <p className="text-sm">
            IEEE Student Branch of Pak-Austria Fachhochschule. Fostering innovation, technical growth, and leadership through events and collaboration.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">HOME</a></li>
            <li><a href="#events" className="hover:text-white transition">ABOUT</a></li>
            <li><a href="#teams" className="hover:text-white transition">EVENTS</a></li>
            <li><a href="#gallery" className="hover:text-white transition">TEAM</a></li>

          </ul>
        </div>

      <div>
        <p>Follow us on our social media account </p>

        <div className='flex mt-4 space-x-10 text-2xl '>

        <FaLinkedinIn className='cursor-pointer' />
        <FaInstagram className='cursor-pointer' />
        </div>

      </div>

        {/* Column 3 - Social & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Connect with Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:ieee@paf-iast.edu.pk" className="hover:text-white">ieee@paf-iast.edu.pk</a></li>
            <li>Location: Haripur, KPK, Pakistan</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IEEE PAF-IAST. All rights reserved.
      </div>
    </footer>
  );
}
