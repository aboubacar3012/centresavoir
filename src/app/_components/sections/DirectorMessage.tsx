"use client";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const DirectorMessage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] } }
  };

  return (
    <section id="director-message" className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Formes décoratives plus discrètes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20"></div>
      <div className="absolute right-0 bottom-0 w-56 h-56 bg-blue-100 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="md:w-1/3 mb-6 md:mb-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-900">Mot du Directeur Général</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-green-600 to-emerald-600 mb-4 rounded-full"></div>
            <div className="hidden md:block">
              <div className="bg-green-600 rounded-full p-3 inline-block">
                <MessageSquareQuote className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="md:w-2/3 bg-white rounded-lg shadow-md p-5 relative"
          >
            <div className="md:hidden absolute -top-4 left-4 bg-green-600 rounded-full p-2">
              <MessageSquareQuote className="w-5 h-5 text-white" />
            </div>
            
            <div className="text-gray-700 text-sm leading-relaxed">
              <p className="font-semibold mb-2">Chers clients et partenaires,</p>
              <p className="mb-2">
                Nous sommes heureux de vous accueillir sur notre site. Le CSILT, créé le 14 février 2009, 
                s'est imposé comme meilleur formateur en Informatique, en Langues et en Traduction en Guinée.
              </p>
              <p className="mb-2">
                Notre site est désormais une plateforme d'échange et un canal de communication 
                dans notre dispositif global, mis au service de nos clients et partenaires.
              </p>
              <p>
                Nous vous remercions de votre visite et restons à votre disposition pour vous accompagner et 
                vous tenir informés de nos réalisations et de nos programmes.
              </p>
              <p className="font-bold mt-3 text-right">
                Monsieur Oumar NYAGARA Diallo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;