"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send, ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Réinitialiser après 3 secondes
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const contactItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
    tap: { scale: 0.98 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs avancés */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-3 px-3 py-1.5 bg-green-100/70 backdrop-blur-sm rounded-full">
            <MessageCircle className="w-3.5 h-3.5 mr-2 text-green-600" />
            <span className="text-green-700 font-medium text-sm">Contactez-nous</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight leading-tight">
            Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">projet</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Nous sommes à votre écoute et prêts à vous accompagner dans votre transformation numérique.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Formulaire de contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 backdrop-blur-sm bg-opacity-80 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-3.5 px-6 rounded-lg shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </div>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Message envoyé avec succès!</h4>
                <p className="text-gray-600">Merci de nous avoir contactés. Nous vous répondrons très bientôt.</p>
              </div>
            )}
          </motion.div>
          
          {/* Informations de contact */}
          <div className="flex flex-col space-y-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 backdrop-blur-sm bg-white/90 h-fit"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h3>
              <div className="space-y-6">
                {/* Adresse */}
                <motion.div 
                  variants={contactItemVariants}
                  className="flex items-start"
                >
                  <div className="p-2.5 bg-green-50 rounded-lg text-green-600 mr-4 shadow-sm ring-1 ring-green-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 text-gray-800">Adresse</h4>
                    <p className="text-gray-600">Conakry (non loin Palais des Plaisirs – Lambanyi), Koloma</p>
                  </div>
                </motion.div>
                
                {/* Email */}
                <motion.div 
                  variants={contactItemVariants}
                  className="flex items-start"
                >
                  <div className="p-2.5 bg-green-50 rounded-lg text-green-600 mr-4 shadow-sm ring-1 ring-green-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 text-gray-800">Email</h4>
                    <a href="mailto:centrecsoirt@gmail.com" className="text-green-600 hover:underline transition-all">centrecsoirt@gmail.com</a>
                  </div>
                </motion.div>
                
                {/* Téléphone */}
                <motion.div 
                  variants={contactItemVariants}
                  className="flex items-start"
                >
                  <div className="p-2.5 bg-green-50 rounded-lg text-green-600 mr-4 shadow-sm ring-1 ring-green-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 text-gray-800">Téléphone</h4>
                    <a href="tel:+224622542045" className="block text-green-600 hover:underline transition-all">(224) 622 54 20 45</a>
                    <a href="tel:+224654204555" className="block text-green-600 hover:underline transition-all">654 20 45 55</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Carte Google Maps */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full min-h-[240px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.391592843274!2d-13.633092!3d9.6526453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6e4f8f7d563%3A0x7cbb7003808942c3!2sLambanyi%2C%20Conakry!5e0!3m2!1sfr!2sgn!4v1653983546545!5m2!1sfr!2sgn"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "240px" }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[240px]"
                title="Notre emplacement sur Google Maps"
              ></iframe>
            </motion.div>
          </div>
        </div>
        
        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <div className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Prêt à démarrer votre projet ?</h3>
            <p className="text-gray-600 mb-6">Nous sommes à votre disposition pour répondre à toutes vos questions.</p>
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all"
            >
              Démarrer maintenant
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
