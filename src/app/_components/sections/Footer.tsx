"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    
    setSubscriptionStatus("success");
    // En production, ajoutez une API pour gérer les abonnements à la newsletter
    
    setTimeout(() => {
      setEmail("");
      setSubscriptionStatus("idle");
    }, 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="font-bold text-lg md:text-2xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Centre du Savoir
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Formez-vous aux métiers du numérique avec les meilleurs experts africains.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Facebook size={18} />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-all">
                  <Twitter size={18} />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all">
                  <Instagram size={18} />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all">
                  <Linkedin size={18} />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Nos Formations</h4>
            <ul className="space-y-4">
              <li><Link href="#informatique" className="text-gray-400 hover:text-white transition-colors">Informatique & Programmation</Link></li>
              <li><Link href="#langues" className="text-gray-400 hover:text-white transition-colors">Langues Étrangères</Link></li>
              <li><Link href="#traduction" className="text-gray-400 hover:text-white transition-colors">Traduction & Interprétation</Link></li>
              <li><Link href="#autres" className="text-gray-400 hover:text-white transition-colors">Autres Formations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Liens Utiles</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Nous contacter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Recevez nos actualités et offres spéciales
            </p>
            {subscriptionStatus === "success" ? (
              <div className="p-4 bg-green-800/30 border border-green-700 rounded-xl">
                <p className="text-green-400 font-medium">Merci pour votre inscription !</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-gray-800 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-r-xl font-semibold hover:opacity-90 transition-all duration-300"
                    aria-label="S'abonner"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Centre du Savoir - CSLT. Tous droits réservés.
          </p>
          <div className="text-sm text-gray-500">
            Conakry, Guinée | <a href="tel:+224622542045" className="hover:text-gray-300">(+224) 622 54 20 45</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
