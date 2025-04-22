"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

// Images de haute qualité d'Unsplash pour le slider
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    alt: "Technologie moderne avec ordinateur portable"
  },
  {
    url: "https://images.unsplash.com/photo-1567301861994-0fb5f2679a44?q=80&w=2340&auto=format&fit=crop",
    alt: "Cours de langues et éducation"
  },
  {
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop",
    alt: "Traduction et communication internationale"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    alt: "Formation professionnelle et développement"
  }
];

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const scrollRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay du carrousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 7000); // Changer l'image toutes les 7 secondes
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // GSAP animations pour les éléments du hero
  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      tl.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
      tl.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
      tl.fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );
      tl.fromTo(
        ".carousel-controls",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );
    }
  }, []);

  // Animation de défilement
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Variants pour les animations d'entrée/sortie des images
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 1.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  // Direction du slide pour les animations
  const [[page, direction], setPage] = useState([0, 0]);

  // Fonction pour changer l'image avec direction
  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;
    if (newPage < 0) newPage = heroImages.length - 1;
    if (newPage >= heroImages.length) newPage = 0;
    setPage([newPage, newDirection]);
    setCurrentImage(newPage);
  };

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel d'images en arrière-plan */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay foncé */}
            <Image
              src={heroImages[currentImage].url}
              alt={heroImages[currentImage].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fond avec dégradé et effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/50 via-emerald-800/50 to-teal-900/50 mix-blend-multiply z-10"></div>

      {/* Cercles décoratifs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-10"></div>
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 z-10"></div>

      {/* Contenu du hero */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="hero-title text-5xl md:text-7xl xl:text-8xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Centre du Savoir
            </span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl xl:text-3xl mb-3 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Informatique, Langues et Traduction (CSLT)
          </motion.p>
          <motion.p 
            className="hero-subtitle text-xl md:text-xl mb-10 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Façonnons ensemble l&apos;avenir numérique de l&apos;Afrique
          </motion.p>
          <motion.div 
            className="hero-cta flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-semibold hover:from-teal-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Nos formations
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Nous contacter
            </button>
          </motion.div>
        </div>
      </div>

      {/* Contrôles du carousel */}
      <div className="carousel-controls absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-6">
        <motion.button 
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>

        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setPage([index, index > currentImage ? 1 : -1]);
                setCurrentImage(index);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className={`w-2.5 h-2.5 rounded-full ${
                currentImage === index ? "bg-white" : "bg-white/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        <motion.button 
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Flèche de défilement centrée */}
      <motion.a
        href="#about"
        className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/80 text-sm mb-2">Découvrir</span>
        <div className="p-2 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </motion.a>

      {/* Éléments décoratifs flottants */}
      <motion.div 
        className="absolute top-1/4 left-1/5 w-20 h-20 z-10"
        animate={{ 
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-white/20 rounded-lg backdrop-blur-md" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/5 w-16 h-16 z-10"
        animate={{ 
          rotate: [0, -360],
          x: [0, 15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-white/20 rounded-full backdrop-blur-md" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-12 h-12 z-10"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full border-4 border-white/20 rotate-45 backdrop-blur-md" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
