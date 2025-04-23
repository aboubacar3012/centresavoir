"use client";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Laptop,
  Languages,
  Newspaper,
  BarChart,
  User,
  Calendar,
  Clock,
  Award,
  AlertCircle,
  BookOpen,
  Sparkles,
} from "lucide-react";

// Import des composants de tabs
import {
  InformatiqueTab,
  LanguesTab,
  TraductionTab,
  AutresFormationsTab,
} from "../tabs";

const Formations = () => {
  // Informatique sélectionné par défaut
  const [selectedFormation, setSelectedFormation] = useState("informatique");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const handleFormationClick = (formationType: SetStateAction<string>) => {
    setSelectedFormation(formationType);
  };

  // Fonction pour afficher le contenu de formation sélectionné
  const renderSelectedFormation = () => {
    switch (selectedFormation) {
      case "informatique":
        return <InformatiqueTab />;
      case "langues":
        return <LanguesTab />;
      case "traduction":
        return <TraductionTab />;
      case "autres":
        return <AutresFormationsTab />;
      default:
        return <InformatiqueTab />;
    }
  };

  // Données des formations pour les tabs
  const formationTabs = [
    {
      id: "informatique",
      title: "Informatique",
      icon: <Laptop className="w-5 h-5" />,
      description:
        "Formations bureautiques, maintenance, réseau, programmation et infographie",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: "langues",
      title: "Langues",
      icon: <Languages className="w-5 h-5" />,
      description:
        "Cours d'anglais, français, arabe et allemand pour tous les niveaux",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    },
    {
      id: "traduction",
      title: "Traduction",
      icon: <Newspaper className="w-5 h-5" />,
      description: "Services de traduction et autres prestations linguistiques",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    },
    {
      id: "autres",
      title: "Autres Formations",
      icon: <BarChart className="w-5 h-5" />,
      description: "BTS en langues et sciences modernes et services médicaux",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-green-100/60 backdrop-blur-sm rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-green-800 font-medium text-sm">
              Excellence en Formation
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-900">
            Nos Formations
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes de formation conçus pour vous propulser
            dans le monde du numérique
          </p>
        </motion.div>

        {/* Structure horizontale pour mobile: tabs en haut et contenu en dessous */}
        <div className="block md:hidden max-w-6xl mx-auto mb-12">
          <div className="flex overflow-x-auto pb-4 gap-3 snap-x">
            {formationTabs.map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`snap-start shrink-0 cursor-pointer rounded-xl ${
                  selectedFormation === tab.id
                    ? "bg-green-100 border-2 border-green-500"
                    : "bg-white border border-gray-200"
                } w-40`}
                onClick={() => handleFormationClick(tab.id)}
              >
                <div className="p-4 flex flex-col items-center text-center">
                  <div
                    className={`p-2 rounded-full ${
                      selectedFormation === tab.id
                        ? "bg-green-200 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-3">
                    {tab.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={selectedFormation + "-mobile"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Image au top sur mobile */}
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src={
                    formationTabs.find((tab) => tab.id === selectedFormation)
                      ?.image || ""
                  }
                  alt={`Formation ${selectedFormation}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-2xl font-bold">
                      {
                        formationTabs.find(
                          (tab) => tab.id === selectedFormation
                        )?.title
                      }
                    </h3>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé de la formation */}
              <div className="prose prose-sm max-w-none">
                {renderSelectedFormation()}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Structure avec tabs à gauche et détail à droite pour tablettes et desktop */}
        <div className="hidden md:block max-w-6xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne de gauche avec les tabs */}
            <div className="lg:w-1/3 flex flex-col">
              {/* Tabs de formation */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:sticky lg:top-24">
                {formationTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`cursor-pointer border-l-4 ${
                      selectedFormation === tab.id
                        ? "border-green-500 bg-green-50"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                    onClick={() => handleFormationClick(tab.id)}
                  >
                    <div className="p-4 lg:p-5 flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          selectedFormation === tab.id
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tab.icon}
                      </div>
                      <div>
                        <h3 className="text-base lg:text-lg font-bold text-gray-900">
                          {tab.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-gray-600 mt-1 hidden lg:block">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Témoignage / Call-to-action */}
              <div className="mt-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-5 shadow-lg hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-indigo-200" />
                  <h4 className="font-bold text-lg">Pourquoi nous choisir</h4>
                </div>
                <p className="text-sm text-indigo-100 mb-4">
                  &quot;Notre mission est de vous donner les compétences pratiques
                  dont vous avez besoin pour réussir dans le monde professionnel
                  d&apos;aujourd&apos;hui.&quot;
                </p>
                <div className="text-right">
                  <button className="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                    En savoir plus
                  </button>
                </div>
              </div>

              {/* Informations d'inscription - Ajouté dans la colonne gauche */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-5 shadow-lg hidden lg:block"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informations d&apos;inscription
                </h3>

                <div className="space-y-4">
                  {/* Frais d'inscription */}
                  <div>
                    <h4 className="text-base font-semibold mb-2">
                      Frais d&apos;inscription
                    </h4>
                    <p className="text-sm">50.000 GNF</p>
                  </div>

                  {/* Jours de formation */}
                  <div>
                    <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Jours de formation
                    </h4>
                    <p className="text-sm mb-1">Du lundi au vendredi</p>
                    <p className="text-sm">
                      Les cours individuels : samedis et dimanches
                    </p>
                  </div>

                  {/* Horaires */}
                  <div>
                    <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Horaires
                    </h4>
                    <p className="text-sm mb-1">Matin : 9h à 11h, 11h à 13h</p>
                    <p className="text-sm">
                      Soir : 15h à 17h, 17h à 19h, 19h à 21h
                    </p>
                  </div>

                  {/* Notes importantes - version complète */}
                  <div className="pt-3 border-t border-white/20">
                    <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Notes importantes
                    </h4>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-white/90">
                      <li>Réduction de 10% pour deux formations différentes</li>
                      <li>
                        Le paiement mensuel se fait au début de chaque mois
                      </li>
                      <li>Les formations linguistiques sont payées au mois</li>
                      <li>
                        Une attestation de formation est délivrée à la fin
                      </li>
                    </ul>

                    {/* Certification */}
                    <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-300" />
                      <p className="text-sm font-semibold">
                        Certification officielle remise à la fin de la formation
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Détail de la formation à droite */}
            <motion.div
              key={selectedFormation + "-desktop"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                {/* Image de la formation */}
                <div className="relative h-48 lg:h-64 w-full rounded-xl overflow-hidden mb-6 lg:mb-8">
                  <Image
                    src={
                      formationTabs.find((tab) => tab.id === selectedFormation)
                        ?.image || ""
                    }
                    alt={`Formation ${selectedFormation}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        {
                          formationTabs.find(
                            (tab) => tab.id === selectedFormation
                          )?.title
                        }
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Contenu détaillé de la formation */}
                <div className="prose prose-base lg:prose-lg max-w-none">
                  {renderSelectedFormation()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
