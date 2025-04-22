"use client";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur lorsque l'utilisateur corrige le champ
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState("submitting");
    
    try {
      // Simulation d'un envoi d'API (à remplacer par une vraie API en production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En production, remplacer par un vrai appel API
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error("Erreur d'envoi");
      
      setFormState("success");
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormState("idle");
      }, 3000);
      
    } catch (error) {
      console.error("Erreur d'envoi du formulaire:", error);
      setFormState("error");
      
      // Réinitialiser l'état après 3 secondes
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {formState === "success" ? (
        <motion.div 
          className="text-center p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Message envoyé !</h3>
          <p className="text-gray-600 mb-6">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
        </motion.div>
      ) : formState === "error" ? (
        <motion.div 
          className="text-center p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Une erreur est survenue</h3>
          <p className="text-gray-600 mb-6">Veuillez réessayer plus tard ou nous contacter directement par téléphone.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
              } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300`}
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
              } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300`}
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
              } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 h-32 resize-none`}
              placeholder="Votre message..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={formState === "submitting"}
          >
            {formState === "submitting" ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </div>
            ) : (
              "Envoyer le message"
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
