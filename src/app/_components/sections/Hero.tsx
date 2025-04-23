"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

// Images pour le slider
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    alt: "Technologie moderne avec ordinateur portable",
  },
  {
    url: "https://images.unsplash.com/photo-1567301861994-0fb5f2679a44?q=80&w=2340&auto=format&fit=crop",
    alt: "Cours de langues et éducation",
  },
  {
    url: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop",
    alt: "Traduction et communication internationale",
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    alt: "Formation professionnelle et développement",
  },
];

const Hero = () => {
  const [, setCurrentImage] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);

  // Animation parallaxe au défilement
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour changer l'image avec direction - memoized with useCallback
  const paginate = useCallback((newDirection: number) => {
    let newPage = page + newDirection;
    if (newPage < 0) newPage = heroImages.length - 1;
    if (newPage >= heroImages.length) newPage = 0;
    setPage([newPage, newDirection]);
    setCurrentImage(newPage);
  }, [page]);

  // Autoplay du carrousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        paginate(1);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, page, paginate]);

  // Variants pour les animations du carrousel
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "5%" : "-5%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.7 },
        scale: { duration: 1.0 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "5%" : "-5%",
      opacity: 0,
      scale: 1.05,
      transition: {
        x: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.7 },
      },
    }),
  };

  // Variants pour les éléments de texte
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel d'images en arrière-plan avec effet parallaxe */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"
              style={{ backdropFilter: "blur(2px)" }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                y: scrollY * 0.2,
              }}
            >
              <Image
                src={heroImages[page % heroImages.length].url}
                alt={heroImages[page % heroImages.length].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                quality={90}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay moderne avec mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-emerald-900/30 mix-blend-overlay z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent mix-blend-overlay z-10"></div>

      {/* Éléments décoratifs modernes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
        {/* Grille */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Formes minimalistes */}
        <motion.div
          className="absolute top-20 left-[20%] w-60 h-60 border border-white/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            rotate: 360,
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.div
          className="absolute bottom-40 right-[20%] w-40 h-40 border border-white/10"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{
            x: [0, 15, 0],
            rotate: -360,
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="container max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge/Label */}
          <motion.div
            className="inline-block mb-6 mx-auto"
            variants={textVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20">
              Bienvenue au centre d&apos;excellence
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-white"
            variants={textVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Centre du Savoir
              </span>
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-xl md:text-2xl mb-2 text-white/90 font-light"
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            Informatique, Langues et Traduction
          </motion.p>

          <motion.p
            className="max-w-2xl mx-auto text-lg mb-10 text-white/80 font-light"
            variants={textVariants}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            Façonnons ensemble l&apos;avenir numérique de l&apos;Afrique
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={textVariants}
            custom={4}
            initial="hidden"
            animate="visible"
          >
            <button className="group relative px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Nos formations</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>

            <button className="px-8 py-3.5 bg-transparent border border-white/30 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Nous contacter
            </button>
          </motion.div>
        </motion.div>

        {/* Navigation du carrousel - version modernisée */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                paginate(-1);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 8000);
              }}
              className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-md transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPage([index, index > page ? 1 : -1]);
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 8000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    page % heroImages.length === index
                      ? "w-10 bg-white"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                paginate(1);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 8000);
              }}
              className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-md transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Indicateur de défilement */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Découvrir
          </span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
