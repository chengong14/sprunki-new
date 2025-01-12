'use client';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Game Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Sprunki-Newest</h3>
            <p className="text-gray-400">
              A fan-made mod that brings new life to the classic Incredibox experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  href="https://allinai.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="The Best AI Tools"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  All in AI Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sprunki-Newest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 