"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Laptop, Users, MessageSquareQuote, ChevronRight, Sparkles } from "lucide-react";

const About = () => {
  // Refs for scroll-triggered animations
  const sectionRef = useRef(null);
  const valuesRef = useRef(null);
  const directorRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isDirectorInView = useInView(directorRef, { once: true });
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Advanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };
  
  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  // Simplified card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    hover: {
      y: -3,
      transition: { 
        duration: 0.3
      }
    }
  };
  
  // Shimmering effect for director image
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDirectorInView) {
        const imgGlow = document.querySelector('.director-image-glow');
        if (imgGlow) {
          imgGlow.classList.add('animate-shimmer');
          setTimeout(() => {
            imgGlow.classList.remove('animate-shimmer');
          }, 2000);
        }
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isDirectorInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-green-50/60 via-white to-blue-50/60"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-70"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"
          style={{ y: backgroundY1 }}
        />
        <motion.div 
          className="absolute -bottom-[20vh] -left-[10vw] w-[80vw] h-[80vh] bg-gradient-to-tr from-blue-200/20 to-indigo-300/10 rounded-full blur-3xl"
          style={{ y: backgroundY2 }}
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.015]"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-green-100/60 backdrop-blur-sm rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-800 font-medium text-sm">Découvrir Notre Centre</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-green-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-emerald-600">
            À Propos
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '180px' }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-2 bg-gradient-to-r from-green-600 to-emerald-400 mx-auto mb-10 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-700 text-xl leading-relaxed font-light"
          >
            Le Centre du Savoir est un établissement d&apos;excellence spécialisé dans la formation en technologies numériques, 
            créant des parcours d&apos;apprentissage innovants pour préparer les talents africains aux défis du monde digital.
          </motion.p>
          
          {/* Statistiques */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14 mb-6"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500 mb-1">2009</span>
              <span className="text-gray-600 font-medium text-sm">Année de création</span>
            </div>
            
            <div className="flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 mb-1"
              >
                3000+
              </motion.span>
              <span className="text-gray-600 font-medium text-sm">Étudiants formés</span>
            </div>
            
            <div className="flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-1"
              >
                15+
              </motion.span>
              <span className="text-gray-600 font-medium text-sm">Années d&apos;expertise</span>
            </div>
            
            <div className="flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 mb-1"
              >
                98%
              </motion.span>
              <span className="text-gray-600 font-medium text-sm">Satisfaction étudiant</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Nos Valeurs */}
        <motion.div
          ref={valuesRef}
          variants={staggerCards}
          initial="hidden"
          animate={isValuesInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white rounded-xl p-8 border border-green-100"
          >
            <div className="mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-xl">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">Formation d&apos;Excellence</h3>
            <p className="text-gray-600 leading-relaxed">Nous offrons des programmes de formation adaptés aux besoins du marché africain avec des méthodes pédagogiques innovantes.</p>
            <div className="mt-4 flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <span>En savoir plus</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white rounded-xl p-8 border border-blue-100"
          >
            <div className="mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-xl">
                <Laptop className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">Technologies Avancées</h3>
            <p className="text-gray-600 leading-relaxed">Notre centre est équipé des dernières technologies pour vous offrir une expérience d&apos;apprentissage immersive.</p>
            <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <span>En savoir plus</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white rounded-xl p-8 border border-purple-100"
          >
            <div className="mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-500 rounded-xl">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors">Experts Passionnés</h3>
            <p className="text-gray-600 leading-relaxed">Notre équipe est composée d&apos;experts qui allient expertise technique et talent pédagogique pour transmettre leur savoir.</p>
            <div className="mt-4 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <span>En savoir plus</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white rounded-xl p-8 border border-amber-100"
          >
            <div className="mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-amber-500 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">Support Personnalisé</h3>
            <p className="text-gray-600 leading-relaxed">Un accompagnement sur mesure pour chaque apprenant, avec un suivi continu et des ressources adaptées à votre rythme.</p>
            <div className="mt-4 flex items-center text-amber-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <span>En savoir plus</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        </motion.div>

        {/* Mot du Directeur - Version ultra-moderne */}
        <motion.div
          ref={directorRef}
          initial={{ opacity: 0 }}
          animate={isDirectorInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute top-16 left-[20%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-24 right-[25%] w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="relative p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl opacity-30"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden bg-white/60 backdrop-blur-sm p-0.5">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-[45%] p-8 md:p-12">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 100,
                          damping: 20,
                          delay: 0.2
                        }}
                        className="relative"
                      >
                        <div className="director-image-container relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto shadow-2xl">
                          {/* Glow effect */}
                          <div className="director-image-glow absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 z-10"></div>
                          
                          {/* Decorative elements */}
                          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-30 blur-md"></div>
                          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full opacity-30 blur-md"></div>
                          
                          {/* Multiple border effect */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/30 transform rotate-3 scale-[1.02]"></div>
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 transform -rotate-2 scale-[1.04]"></div>
                          
                          {/* The actual image - Updated with Unsplash image */}
                          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                            <Image
                              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop"
                              alt="Monsieur Oumar NYAGARA Diallo, Directeur Général"
                              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
                              fill
                              sizes="(max-width: 768px) 100vw, 400px"
                              priority
                            />
                          </div>
                        </div>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg"
                        >
                          Directeur Général
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="md:w-[55%] p-8 md:p-12"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-md shadow-green-600/30">
                        <MessageSquareQuote className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-emerald-600">
                        Mot du Directeur
                      </h2>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100/80 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      
                      <p className="text-gray-700 italic mb-6 leading-relaxed text-lg relative">
                        <span className="absolute -top-1 -left-2 text-5xl opacity-20 font-serif text-green-400">{'"'}</span>
                        Le CSILT, créé en 2009, s&apos;est imposé comme leader de la formation en Informatique, Langues et Traduction en Guinée. Notre mission est de préparer les talents africains aux défis du monde numérique avec excellence et innovation.
                        <span className="absolute -bottom-4 -right-2 text-5xl opacity-20 font-serif text-green-400">{'"'}</span>
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg text-green-800">
                            Oumar NYAGARA Diallo
                          </h4>
                          <p className="text-sm text-gray-600">Fondateur &amp; Directeur Général</p>
                        </div>
                      </div>
                    
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8 mb-6"
                      />
                    
                      <div className="flex justify-between gap-4">
                        <div className="text-center">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} 
                            transition={{ delay: 0.7 }}
                            className="text-3xl font-bold text-green-700"
                          >
                            15+
                          </motion.div>
                          <p className="text-sm text-gray-600">Années d&apos;expérience</p>
                        </div>
                      
                        <div className="text-center">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} 
                            transition={{ delay: 0.8 }}
                            className="text-3xl font-bold text-green-700"
                          >
                            3000+
                          </motion.div>
                          <p className="text-sm text-gray-600">Étudiants formés</p>
                        </div>
                      
                        <div className="text-center">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} 
                            transition={{ delay: 0.9 }}
                            className="text-3xl font-bold text-green-700"
                          >
                            98%
                          </motion.div>
                          <p className="text-sm text-gray-600">Taux de satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0; transform: translateX(-100%); }
          20% { opacity: 0.3; }
          60% { opacity: 0.3; }
          100% { opacity: 0; transform: translateX(100%); }
        }
        
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;
