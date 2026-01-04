"use client";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => (
  <div className={`flex flex-col h-full rounded-2xl group ${className}`}>
    <div className="mb-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
      <div className="p-3 rounded-xl bg-blue-900/20 group-hover:bg-purple-900/20 transition-all duration-300 inline-block">
        <Icon className="w-8 h-8 md:w-10 md:h-10" />
      </div>
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-sm md:text-base">
      {description}
    </p>
    <div className="mt-auto">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent group-hover:via-purple-500/50 transition-all duration-300 mb-4" />
      <span className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1">
        Learn more
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </span>
    </div>
  </div>
);

export default FeatureCard;
