"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Stethoscope, Activity } from "lucide-react";
import Image from "next/image";

const AutresFormationsTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* BTS Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <GraduationCap className="mr-2" />
          BTS en Langues et Sciences modernes
        </h3>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 w-full">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="BTS en Langues et Sciences modernes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/70 to-indigo-900/90 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h4 className="text-xl font-bold mb-2">Formation Diplômante</h4>
                <p>Obtenez un diplôme reconnu après 3 ans d&apos;études</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold text-gray-700">Spécialités</div>
                <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Certification BTS</div>
              </div>
              <p className="text-gray-600">Langue Arabe, Langue Française, Langue Anglaise, Informatique, Pédagogie, Traduction, Méthodologie de Recherche et Administration</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[140px] bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Tarif</div>
                <div className="text-lg font-bold text-indigo-900">1.800.000 / An</div>
              </div>
              
              <div className="flex-1 min-w-[140px] bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Durée</div>
                <div className="text-lg font-bold text-indigo-900">3 ans</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Médicaux Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <Stethoscope className="mr-2" />
          Services Médicaux
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Installation des logiciels médicaux */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center p-6 border-b border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold">Installation des logiciels médicaux</h4>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Tarif</div>
                <div className="text-indigo-900 font-bold">200.000 F.G / Logiciel</div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Configuration et formation incluses
              </div>
            </div>
          </div>
          
          {/* Card 2 - Vente des articles médicaux */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center p-6 border-b border-gray-100">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold">Vente des articles médicaux</h4>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Tarif</div>
                <div className="text-indigo-900 font-bold">Selon l&apos;article</div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Consultez notre catalogue pour plus de détails
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800">
          <p className="text-sm">Pour plus d&apos;informations sur nos services médicaux, n&apos;hésitez pas à contacter notre équipe spécialisée.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AutresFormationsTab;
