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
  <div className={`flex flex-col h-full rounded-3xl ${className}`}>
    <div className="mb-6 text-blue-400">
      <Icon className="w-14 h-14" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <div className="mt-auto">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-4" />
      <span className="text-blue-400 hover:text-purple-400 transition-colors">
        Learn more →
      </span>
    </div>
  </div>
);

export default FeatureCard;
