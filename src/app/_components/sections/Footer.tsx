"use client";
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand and info */}
          <div className="mb-6">
            <h2 className="font-medium text-xl text-white mb-2">
              Centre du Savoir
            </h2>
            <p className="text-sm text-gray-400">
              Formez-vous aux métiers du numérique avec les meilleurs experts africains.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <div className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <Facebook size={18} />
              </div>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <div className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300">
                <Twitter size={18} />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <div className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </div>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300">
                <Linkedin size={18} />
              </div>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-500 mb-2 md:mb-0">
            &copy; {currentYear} Centre du Savoir - CSLT
          </p>
          <div className="text-gray-500 hover:text-gray-400 transition-colors">
            <Link href="/privacy-policy">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
