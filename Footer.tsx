import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-green-400 mb-4">
              <Sprout className="h-8 w-8" />
              <span className="text-2xl font-bold">AgriConnect</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting farmers and buyers across the agricultural value chain. From seeds to harvest, 
              we're building a sustainable future for agriculture.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>info@agriconnect.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-300 hover:text-green-400 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-green-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace?category=seeds" className="text-gray-300 hover:text-green-400 transition-colors">
                  Seeds
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=farmland" className="text-gray-300 hover:text-green-400 transition-colors">
                  Farmland
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=labor" className="text-gray-300 hover:text-green-400 transition-colors">
                  Farm Labor
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=tools" className="text-gray-300 hover:text-green-400 transition-colors">
                  Tools & Equipment
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=crops" className="text-gray-300 hover:text-green-400 transition-colors">
                  Crop Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 AgriConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;