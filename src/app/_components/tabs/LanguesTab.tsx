"use client";
import { motion } from "framer-motion";
import { Globe, Book, FileText, Award, Users } from "lucide-react";
import Image from "next/image";

const LangueCard = ({ langue, description, tarif, duree, imageSrc, color }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="relative h-36 w-full overflow-hidden">
        <Image 
          src={imageSrc}
          alt={`Cours de ${langue}`}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${color} bg-opacity-85 flex items-center`}>
          <div className="p-6 text-white">
            <h4 className="text-xl font-bold mb-1">{langue}</h4>
            <p className="text-sm opacity-90">Apprenez à communiquer efficacement</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Users className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="font-medium text-gray-700">Programme</span>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-xs text-gray-500 mb-1">Tarif mensuel</div>
            <div className="font-semibold text-indigo-900">{tarif}</div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-xs text-gray-500 mb-1">Durée totale</div>
            <div className="font-semibold text-indigo-900">{duree}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LanguesTab = () => {
  const langues = [
    {
      langue: "Anglais",
      description: "Trois niveaux : Débutant, Moyen et Avancé",
      tarif: "150.000 / Mois",
      duree: "6 Mois",
      imageSrc: "https://images.unsplash.com/photo-1526857240824-92be52581d9b",
      color: "from-blue-600/80 to-blue-800/80"
    },
    {
      langue: "Arabe",
      description: "Trois niveaux : Débutant, Moyen et Avancé",
      tarif: "150.000 / Mois",
      duree: "6 Mois",
      imageSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      color: "from-green-600/80 to-green-800/80"
    },
    {
      langue: "Français",
      description: "Trois niveaux : Débutant, Moyen et Avancé",
      tarif: "150.000 / Mois",
      duree: "6 Mois",
      imageSrc: "https://images.unsplash.com/photo-1549492423-03a32c5764f5",
      color: "from-red-600/80 to-red-800/80"
    },
    {
      langue: "Allemand",
      description: "Formation complète en langue allemande",
      tarif: "200.000 / Mois",
      duree: "6 Mois",
      imageSrc: "https://images.unsplash.com/photo-1527866512907-61d64dc15a19",
      color: "from-yellow-600/80 to-yellow-800/80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div>
        <h3 className="text-2xl font-bold mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <Globe className="mr-2" />
          Formation en Langues
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {langues.map((langue, index) => (
            <LangueCard 
              key={index}
              langue={langue.langue}
              description={langue.description}
              tarif={langue.tarif}
              duree={langue.duree}
              imageSrc={langue.imageSrc}
              color={langue.color}
            />
          ))}
        </div>

        <div className="mt-8 bg-indigo-50 rounded-lg p-5 border border-indigo-100">
          <div className="flex items-start">
            <Award className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-indigo-900 mb-2">Certification</h4>
              <p className="text-indigo-700 text-sm">Une attestation officielle est délivrée à la fin de chaque niveau de formation.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mt-10 mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <Book className="mr-2" />
          Mémorisation
        </h3>
        
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="relative h-48 w-full">
            <Image 
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b"
              alt="Mémorisation du Saint Coran"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-teal-800/90 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h4 className="text-xl font-bold mb-2">Programme Spécial</h4>
                <p className="opacity-90">Mémorisation du Saint Coran et Hadith</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-gray-800">Description du Programme</span>
              </div>
              <p className="text-gray-600">
                Mémorisation du Saint Coran et Hadith avec formation en Arabe et en Informatique
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
              <div className="font-medium text-gray-700 mb-2">Tarif</div>
              <div className="text-xl font-bold text-green-700">150.000 / Mois (6 jours / 7)</div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Ce programme complet combine l&apos;apprentissage spirituel et les compétences linguistiques et informatiques.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguesTab;
