"use client";
import { motion } from "framer-motion";
import { Languages, Globe, Printer, Copy, PenTool, Layout, HelpCircle, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

const TraductionTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Services de Traduction */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <Languages className="mr-2" />
          Services de Traduction
        </h3>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 w-full">
            <Image 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721" 
              alt="Services de Traduction"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-700/80 flex items-center">
              <div className="p-8 text-white">
                <h4 className="text-2xl font-bold mb-2">Traduction Professionnelle</h4>
                <p className="opacity-90">Traduisez vos documents avec précision et qualité</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6 bg-indigo-50 p-3 rounded-lg">
              <div className="bg-indigo-100 rounded-full p-2">
                <Globe className="h-5 w-5 text-indigo-700" />
              </div>
              <div>
                <div className="font-semibold text-indigo-900">Français / Anglais – Anglais / Français</div>
                <div className="text-sm text-indigo-700">Traduction précise par des experts linguistiques</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Tarif</div>
                <div className="text-lg font-bold text-indigo-900">100.000 / Mois</div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Durée de formation</div>
                <div className="text-lg font-bold text-indigo-900">6 Mois</div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <p className="text-gray-600">Pour devenir traducteur ou pour faire traduire vos documents, contactez-nous pour plus d'informations.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Prestation de Services */}
      <div>
        <h3 className="text-2xl font-bold mt-10 mb-6 text-indigo-900 border-b pb-4 flex items-center">
          <MonitorSmartphone className="mr-2" />
          Prestation de Services
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <PenTool className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Saisie & Impression</h4>
              <p className="text-gray-600 text-sm">Service professionnel de saisie et impression de vos documents</p>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Copy className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Scanner & Gravure</h4>
              <p className="text-gray-600 text-sm">Numérisation de documents et gravure de médias numériques</p>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Printer className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Photocopie & Reliure</h4>
              <p className="text-gray-600 text-sm">Service de photocopie et reliure professionnelle de documents</p>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Languages className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Traduction</h4>
              <p className="text-gray-600 text-sm">Traduction professionnelle de documents en plusieurs langues</p>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-rose-100 p-3 rounded-full mb-4">
                <Layout className="h-6 w-6 text-rose-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Conception Graphique</h4>
              <p className="text-gray-600 text-sm">Création de logos, flyers et autres supports graphiques</p>
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow p-6 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Création de Sites</h4>
              <p className="text-gray-600 text-sm">Développement de sites web professionnels et personnalisés</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white p-6 shadow-lg">
          <div className="flex items-start">
            <HelpCircle className="h-8 w-8 mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-3">Comment ça fonctionne</h4>
              <p className="mb-2 opacity-90">Les tarifs sont calculés selon le type de travail et la quantité.</p>
              <p className="opacity-90">Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TraductionTab;
