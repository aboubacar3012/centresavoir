"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Testimonials data with enhanced profiles
  const testimonials = [
    {
      id: 0,
      name: "Mme DIALLO D.",
      role: "Ancienne étudiante et professeure d'informatique",
      location: "France",
      content: "Après avoir acquis une solide formation en informatique de base (Pack office), j'ai été coopté pour donner cours dans ces programmes pendant 2 ans. Ce fut un grand plaisir pour moi d'avoir été formé et avoir formé dans cet Institut. L'ambiance qui y règne est favorable à un apprentissage de qualité. Grâce à cette expérience, je suis aujourd'hui autonome dans le cadre de mes démarches où presque tout se fait sur internet. Se former au Centre du Savoir est synonyme de réussite.",
      image: "/testimonials/profile-1.jpg",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 1,
      name: "Mme BARRY née Madina Diakité",
      role: "Ancienne étudiante et professeure d'informatique",
      location: "France", 
      content: "Après mes études universitaires, j'ai été recruté comme prestataire avant de suivre une formation en anglais et une formation des formateurs en informatique bureautique. Je suis actuellement étudiante en informatique en France. Cette expérience du Centre du Savoir m'a été d'une grande utilité. J'encourage sincèrement ceux qui aspirent à une bonne formation en langues et en informatique à se tourner vers l'Institut Centre du Savoir qui est une référence pour beaucoup de jeunes guinéens.",
      image: "/testimonials/profile-2.jpg",
      color: "from-blue-500 to-indigo-400"
    },
    {
      id: 2,
      name: "DIALLO Boubacar",
      role: "Étudiant en LEA (Langues étrangères appliquées)",
      location: "Université Paris Nanterre",
      content: "J'ai été formé en informatique bureautique à l'Institut Technique et Professionnel Privé – Centre du Savoir, puis recruté comme professeur d'anglais. Le fait d'avoir enseigné la langue anglaise m'a permis de rehausser mon niveau et d'obtenir une admission en France. Je vous conseille de profiter du Centre du Savoir car la formation est de qualité.",
      image: "/testimonials/profile-3.jpg",
      color: "from-purple-500 to-violet-400"
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoplay && isInView) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length, isInView]);

  // Handle navigation
  const handleNext = () => {
    setIsAutoplay(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (idx) => {
    setIsAutoplay(false);
    setActiveTestimonial(idx);
  };

  // Card position calculations for 3D carousel effect
  const getCardStyles = (idx) => {
    const diff = (idx - activeTestimonial + testimonials.length) % testimonials.length;
    if (diff === 0) return { zIndex: 30, opacity: 1, scale: 1, x: 0 }; // Active
    if (diff === 1 || diff === testimonials.length - 1) return {
      zIndex: 20,
      opacity: 0.7,
      scale: 0.9,
      x: diff === 1 ? 150 : -150,
    };
    return { zIndex: 10, opacity: 0, scale: 0.8, x: 0 };
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#f8fafc]"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-to-br from-green-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-[40vw] h-[40vh] bg-gradient-to-tr from-purple-100/20 to-pink-100/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
        
        {/* Animated floating elements */}
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-10 left-[10%] w-16 h-16 bg-green-100 rounded-full blur-xl opacity-40"
        />
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-32 right-[15%] w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-40"
        />
        <motion.div 
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-40 right-[30%] w-12 h-12 bg-purple-100 rounded-full blur-xl opacity-30"
        />
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-blue-100/30 backdrop-blur-sm rounded-full">
            <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Retours d'expérience</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-600">
            Témoignages de nos étudiants
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '180px' }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
          >
            Découvrez ce que nos anciens étudiants disent de leur expérience au Centre du Savoir
            et comment leur formation a transformé leur parcours professionnel.
          </motion.p>
        </motion.div>

        {/* 3D Carousel System */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute z-40 top-1/2 -translate-y-1/2 left-0 md:-left-10 lg:-left-16">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors group border border-gray-100"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="absolute z-40 top-1/2 -translate-y-1/2 right-0 md:-right-10 lg:-right-16">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors group border border-gray-100"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
          {/* Testimonial cards with 3D effect */}
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <div className="absolute w-full h-full">
              <AnimatePresence>
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    className="absolute top-0 left-0 w-full transform-gpu"
                    initial={getCardStyles((activeTestimonial + 1) % testimonials.length)}
                    animate={getCardStyles(idx)}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                  >
                    <div 
                      className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden border border-gray-100 
                        ${idx === activeTestimonial ? 'testimonial-active' : 'testimonial-inactive'}`}
                    >
                      <div className="md:flex items-start gap-6">
                        {/* Profile section */}
                        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                            {/* Glow effect behind image */}
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.color} blur-md opacity-30`}></div>
                            
                            {/* Profile image */}
                            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                              <div className="w-full h-full relative">
                                <Image
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center md:text-left">
                            <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-blue-600">{testimonial.role}</p>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                            
                            <div className="flex mt-3 justify-center md:justify-start">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Testimonial content */}
                        <div className="md:w-2/3 flex-1">
                          <div className="bg-blue-50/50 rounded-2xl p-6 relative">
                            {/* Quote icon */}
                            <div className="absolute top-4 left-4">
                              <Quote className="w-6 h-6 text-blue-300/50" />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
                            
                            <p className="text-gray-700 leading-relaxed pt-4 italic">
                              "{testimonial.content}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                className={`relative transition-all duration-300 focus:outline-none`}
                onClick={() => selectTestimonial(idx)}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <span className="block w-3 h-3 rounded-full border border-blue-200"></span>
                <span 
                  className={`absolute inset-0 w-full h-full rounded-full bg-blue-600 transform scale-0 
                    ${activeTestimonial === idx ? 'animate-dot-scale' : ''}`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .testimonial-active {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-inactive {
          filter: saturate(0.8);
        }
        
        @keyframes dotScale {
          0% { transform: scale(0); }
          50% { transform: scale(1); }
          100% { transform: scale(0.7); }
        }
        
        .animate-dot-scale {
          animation: dotScale 0.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;