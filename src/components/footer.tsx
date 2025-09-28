import React from 'react';
import { ExternalLink } from 'lucide-react';
import { footerData } from "@/constants";
import Logo from './logo';

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 lg:gap-12">
          <div className=""><Logo/></div>
          {footerData.links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-lg tracking-wide uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <span className="mr-2">{item.label}</span>
                      <ExternalLink 
                        size={12} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      {/* Bottom Bar */}
      <div className="border-t border-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              {footerData.copyright}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 order-first md:order-none">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="grid grid-cols-3 sm:flex gap-x-6 gap-y-2 text-sm justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-center">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-center">
                Status
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-center">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;