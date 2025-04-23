"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Cpu, Database, BarChart, Layers, Terminal, Gauge, Clock, CreditCard, 
  BookOpen, Award, PenTool, MonitorSmartphone, FileCode, HardDrive, Network, DollarSign,
  Globe, Lightbulb, Plane, ChevronDown, ChevronUp
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Composant pour chaque formation en format ligne
const FormationLine = ({ title, price, duration, icon: Icon, bgColor }) => (
  <div className={`border-l-4 ${bgColor.replace('bg-gradient-to-r', 'border-l')} bg-white hover:bg-gray-50 p-3 rounded-md shadow-sm hover:shadow transition-all flex justify-between items-center`}>
    <div className="flex items-center">
      <Icon className={`h-4 w-4 mr-3 ${bgColor.includes('from-blue') ? 'text-blue-600' : bgColor.includes('from-green') ? 'text-green-600' : 'text-indigo-600'}`} />
      <h4 className="font-medium text-gray-800">{title}</h4>
    </div>
    <div className="flex space-x-6 text-gray-600 text-sm">
      <div className="flex items-center">
        <CreditCard className="h-3.5 w-3.5 mr-1.5 opacity-70" />
        <span>{price}</span>
      </div>
      <div className="flex items-center">
        <Clock className="h-3.5 w-3.5 mr-1.5 opacity-70" />
        <span>{duration}</span>
      </div>
    </div>
  </div>
);

// Composant retravaillé pour chaque section de formation en accordéon
const FormationSection = ({ title, description, icon: Icon, formations, imageSrc, isOpen, onToggle }) => {
  return (
    <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
      {/* En-tête cliquable */}
      <div 
        className="flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className="bg-indigo-100 p-2 rounded-full mr-3">
            <Icon className="h-6 w-6 text-indigo-700" />
          </div>
          <h3 className="text-xl font-bold text-indigo-900">{title}</h3>
        </div>
        <div className="bg-indigo-100 p-1.5 rounded-full">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-indigo-700" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-700" />
          )}
        </div>
      </div>
      
      {/* Contenu accordéon */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-indigo-600/50 flex items-center">
                <div className="p-6 text-white max-w-md">
                  <p className="text-lg">{description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5">
              {/* En-têtes des colonnes */}
              <div className="flex justify-between items-center mb-3 px-4 text-sm font-semibold text-gray-500">
                <div>Nom de la formation</div>
                <div className="flex space-x-6">
                  <div className="w-24 text-center">Prix (FCFA)</div>
                  <div className="w-24 text-center">Durée</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {formations.map((formation, index) => (
                  <FormationLine
                    key={index}
                    title={formation.title}
                    price={formation.price}
                    duration={formation.duration}
                    icon={formation.icon}
                    bgColor={formation.bgColor}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InformatiqueTab = () => {
  // État pour suivre l'accordéon actuellement ouvert (0 = premier accordéon ouvert par défaut)
  const [activeIndex, setActiveIndex] = useState(0);

  // Fonction pour gérer le clic sur un accordéon
  const handleToggle = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    // Si on clique sur l'accordéon déjà ouvert, on le ferme
    // Sinon on ouvre celui sur lequel on a cliqué
  };

  // Définition des formations de base
  const formationsBase = [
    {
      title: "Microsoft Windows",
      price: "100.000",
      duration: "2 Semaines",
      icon: Monitor,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      title: "TI + Dactylographie",
      price: "80.000",
      duration: "2 Semaines",
      icon: BookOpen,
      bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700"
    },
    {
      title: "Microsoft Word",
      price: "120.000",
      duration: "3 Semaines",
      icon: FileCode,
      bgColor: "bg-gradient-to-r from-sky-500 to-sky-700"
    },
    {
      title: "Microsoft Excel",
      price: "130.000",
      duration: "3 Semaines",
      icon: BarChart,
      bgColor: "bg-gradient-to-r from-green-500 to-green-700"
    },
  ];

  // Définition des formations avancées
  const formationsAvancees = [
    {
      title: "Microsoft Excel Avancé",
      price: "150.000",
      duration: "2 Semaines",
      icon: BarChart,
      bgColor: "bg-gradient-to-r from-emerald-600 to-emerald-800"
    },
    {
      title: "Microsoft Access",
      price: "180.000",
      duration: "1 Mois",
      icon: Database,
      bgColor: "bg-gradient-to-r from-red-500 to-red-700"
    },
    {
      title: "Microsoft PowerPoint",
      price: "150.000",
      duration: "3 Semaines",
      icon: Monitor,
      bgColor: "bg-gradient-to-r from-amber-500 to-amber-700"
    },
    {
      title: "Microsoft Publisher",
      price: "120.000",
      duration: "2 Semaines",
      icon: PenTool,
      bgColor: "bg-gradient-to-r from-violet-500 to-violet-700"
    },
    {
      title: "Internet",
      price: "200.000",
      duration: "1 Mois",
      icon: Globe,
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
  ];

  // Définition des formations spécialisées
  const formationsSpecialisees = [
    {
      title: "Maintenance (Matérielle & Logicielle)",
      price: "200.000",
      duration: "1 Mois",
      icon: HardDrive,
      bgColor: "bg-gradient-to-r from-gray-600 to-gray-800"
    },
    {
      title: "Maintenance électronique",
      price: "200.000",
      duration: "1 Mois",
      icon: Cpu,
      bgColor: "bg-gradient-to-r from-amber-600 to-amber-800"
    },
    {
      title: "Réseaux informatique (Network)",
      price: "500.000",
      duration: "1 Mois",
      icon: Network,
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      title: "Comptabilité & Gestion",
      price: "500.000",
      duration: "1 Mois",
      icon: DollarSign,
      bgColor: "bg-gradient-to-r from-green-600 to-green-800"
    },
    {
      title: "Graphique (Infographie)",
      price: "500.000",
      duration: "1 Mois",
      icon: Layers,
      bgColor: "bg-gradient-to-r from-pink-600 to-pink-800"
    },
    {
      title: "Conception Web (Web Design)",
      price: "500.000",
      duration: "1 Mois",
      icon: Globe,
      bgColor: "bg-gradient-to-r from-purple-600 to-purple-800"
    },
    {
      title: "Langage de Programmation",
      price: "600.000",
      duration: "1 Mois",
      icon: Terminal,
      bgColor: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
      title: "Amadeus (Réservation des billets d'Avion)",
      price: "600.000",
      duration: "1 Mois",
      icon: Plane,
      bgColor: "bg-gradient-to-r from-blue-700 to-blue-900"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-8 text-indigo-900 border-b pb-4 flex items-center">
        <MonitorSmartphone className="mr-2" />
        Formation en Informatique
      </h3>

      {/* Formations de base */}
      <FormationSection
        title="Formations de Base"
        description="Démarrez votre parcours informatique avec les compétences fondamentales et essentielles."
        icon={BookOpen}
        formations={formationsBase}
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
        isOpen={activeIndex === 0}
        onToggle={() => handleToggle(0)}
      />

      {/* Formations avancées */}
      <FormationSection
        title="Formations Avancées"
        description="Perfectionnez vos compétences avec nos cours avancés pour les utilisateurs intermédiaires."
        icon={Award}
        formations={formationsAvancees}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        isOpen={activeIndex === 1}
        onToggle={() => handleToggle(1)}
      />

      {/* Formations spécialisées */}
      <FormationSection
        title="Formations Spécialisées"
        description="Devenez un expert dans des domaines techniques spécifiques avec nos formations spécialisées."
        icon={Gauge}
        formations={formationsSpecialisees}
        imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
        isOpen={activeIndex === 2}
        onToggle={() => handleToggle(2)}
      />

      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Lightbulb className="h-6 w-6 text-indigo-700" />
          </div>
          <h4 className="text-lg font-semibold text-indigo-900">Pourquoi choisir nos formations informatiques ?</h4>
        </div>
        <ul className="space-y-3 pl-12 list-disc marker:text-indigo-500">
          <li className="text-gray-700">Des formateurs certifiés et expérimentés</li>
          <li className="text-gray-700">Un équipement moderne et à jour</li>
          <li className="text-gray-700">Des cours pratiques avec de nombreux exercices</li>
          <li className="text-gray-700">Des attestations reconnues à la fin de chaque formation</li>
          <li className="text-gray-700">Un suivi personnalisé pour chaque apprenant</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default InformatiqueTab;
