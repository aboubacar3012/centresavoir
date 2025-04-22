"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "../ui";

const Contact = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center text-white mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Contactez-nous</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-blue-100">
            Prêt à commencer votre voyage vers l&apos;excellence numérique ? Contactez-nous dès aujourd&apos;hui !
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Informations de contact */}
          <motion.div
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-blue-100">Conakry (non loin Palais des Plaisirs – Lambanyi), Koloma – Lambanyi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100">centrecsoirt@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-blue-100">(224) 622 54 20 45 / 654 20 45 55</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
