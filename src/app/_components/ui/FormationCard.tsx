"use client";
import { motion } from "framer-motion";
import { Code, Laptop, Globe } from "lucide-react";

type FormationCardProps = {
  title: string;
  description: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  icon: "code" | "laptop" | "globe";
};

const FormationCard = ({
  title,
  description,
  tags,
  gradientFrom,
  gradientTo,
  icon,
}: FormationCardProps) => {
  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="w-24 h-24 text-white/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;
      case "laptop":
        return <Laptop className="w-24 h-24 text-white/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;
      case "globe":
        return <Globe className="w-24 h-24 text-white/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;
      default:
        return <Code className="w-24 h-24 text-white/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;
    }
  };

  return (
    <motion.div
      variants={scaleUp}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className={`h-48 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
        {getIcon()}
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-${gradientFrom.split('-')[0]}-100 text-${gradientFrom} rounded-full text-sm`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className={`w-full px-6 py-3 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300`}
        >
          En savoir plus
        </button>
      </div>
    </motion.div>
  );
};

export default FormationCard;
