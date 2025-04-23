"use client";;
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Testimonials data with enhanced profiles
  const testimonials = [
    {
      id: 0,
      name: "Mme DIALLO D.",
      role: "Ancienne étudiante et professeure d'informatique",
      location: "France",
      content: "Après avoir acquis une solide formation en informatique de base (Pack office), j'ai été coopté pour donner cours dans ces programmes pendant 2 ans. Ce fut un grand plaisir pour moi d'avoir été formé et avoir formé dans cet Institut. L'ambiance qui y règne est favorable à un apprentissage de qualité. Grâce à cette expérience, je suis aujourd'hui autonome dans le cadre de mes démarches où presque tout se fait sur internet. Se former au Centre du Savoir est synonyme de réussite.",
      // Using UI Avatars API directly instead of missing images
      image: "https://ui-avatars.com/api/?name=DIALLO+D&background=0D8ABC&color=fff",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 1,
      name: "Mme BARRY née Madina Diakité",
      role: "Ancienne étudiante et professeure d'informatique",
      location: "France", 
      content: "Après mes études universitaires, j'ai été recruté comme prestataire avant de suivre une formation en anglais et une formation des formateurs en informatique bureautique. Je suis actuellement étudiante en informatique en France. Cette expérience du Centre du Savoir m'a été d'une grande utilité. J'encourage sincèrement ceux qui aspirent à une bonne formation en langues et en informatique à se tourner vers l'Institut Centre du Savoir qui est une référence pour beaucoup de jeunes guinéens.",
      // Using UI Avatars API directly instead of missing images
      image: "https://ui-avatars.com/api/?name=Madina+Diakité&background=1D4ED8&color=fff",
      color: "from-blue-500 to-indigo-400"
    },
    {
      id: 2,
      name: "DIALLO Boubacar",
      role: "Étudiant en LEA (Langues étrangères appliquées)",
      location: "Université Paris Nanterre",
      content: "J'ai été formé en informatique bureautique à l'Institut Technique et Professionnel Privé – Centre du Savoir, puis recruté comme professeur d'anglais. Le fait d'avoir enseigné la langue anglaise m'a permis de rehausser mon niveau et d'obtenir une admission en France. Je vous conseille de profiter du Centre du Savoir car la formation est de qualité.",
      // Using UI Avatars API directly instead of missing images
      image: "https://ui-avatars.com/api/?name=DIALLO+Boubacar&background=7E22CE&color=fff",
      color: "from-purple-500 to-violet-400"
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
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

  const selectTestimonial = (idx: number) => {
    setIsAutoplay(false);
    setActiveTestimonial(idx);
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
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f0f4f8]"
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
        className="container mx-auto px-4 sm:px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-blue-100/30 backdrop-blur-sm rounded-full">
            <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Retours d&apos;expérience</span>
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

        {/* Modern Horizontal Carousel */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Large navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute z-40 top-1/2 -translate-y-1/2 -left-5 md:-left-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 group border border-gray-100"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute z-40 top-1/2 -translate-y-1/2 -right-5 md:-right-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 group border border-gray-100"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          {/* Carousel container with overflow */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div 
              className="flex"
              animate={{ x: `-${activeTestimonial * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                setIsAutoplay(false);
                const swipe = offset.x;
                if (swipe < -70) {
                  handleNext();
                } else if (swipe > 70) {
                  handlePrev();
                }
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="min-w-full px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-500 h-full">
                    <div className="relative">
                      {/* Decorative gradient top bar */}
                      <div className={`h-2 w-full bg-gradient-to-r ${testimonial.color}`}></div>
                      
                      <div className="p-8 md:p-10">
                        {/* Quote icon with gradient background */}
                        <div className="absolute top-8 right-10">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 flex items-center justify-center`}>
                            <Quote className="w-6 h-6 text-blue-700 opacity-70" />
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          {/* Profile section */}
                          <div className="md:w-1/4 flex flex-col items-center md:items-start">
                            <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
                              {/* Animated glow effect */}
                              <motion.div 
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.color} blur-md opacity-30`}
                                animate={{ 
                                  scale: [1, 1.05, 1],
                                  opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                              ></motion.div>
                              
                              {/* Profile image */}
                              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-md">
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
                            
                            <div className="text-center md:text-left">
                              <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                              <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                              
                              <div className="flex mt-3 justify-center md:justify-start gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Testimonial content */}
                          <div className="md:w-3/4 flex-1">
                            <div className="bg-blue-50/50 rounded-2xl p-6 md:p-8 relative backdrop-blur-sm">
                              {/* Decorative elements */}
                              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
                              
                              <p className="text-gray-700 leading-relaxed italic text-lg">
                                &quot;{testimonial.content.replace(/'/g, "&#39;")}&quot;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Modern pagination indicators */}
          <div className="flex justify-center items-center space-x-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectTestimonial(idx)}
                className="group focus:outline-none"
                aria-label={`Voir témoignage ${idx + 1}`}
              >
                <div className="w-16 h-2 rounded-full overflow-hidden bg-gray-200 relative">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-600"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeTestimonial === idx ? '100%' : '0%',
                      transition: {
                        duration: activeTestimonial === idx && isAutoplay ? 5 : 0.5,
                        ease: 'easeInOut'
                      }
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }
        
        .testimonial-shine:hover:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            to right, 
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.2) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: translateX(-100%);
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;