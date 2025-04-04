import {
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export const documents = [
  {
    title: "Project Proposal",
    description:
      "Initial project concept, objectives, methodology, and expected outcomes.",
    icon: () => <DocumentTextIcon className="w-8 h-8 text-blue-400" />,
    link: "https://drive.google.com/file/d/1a6zYaiHwjIFYx1MvGks6-4QeNu3kXnKc/view?usp=sharing",
    available: true,
  },
  {
    title: "Technical Specifications",
    description:
      "Detailed technical specifications, requirements, and implementation guidelines.",
    icon: () => <WrenchScrewdriverIcon className="w-8 h-8 text-purple-400" />,
    link: "/docs/specs.pdf",
    available: false,
  },
  {
    title: "Project Analysis Report",
    description:
      "Comprehensive analysis of problem domain, user needs, and technical constraints.",
    icon: () => <ChartBarIcon className="w-8 h-8 text-indigo-400" />,
    link: "https://drive.google.com/file/d/1xeHliLszynRR9aqaJOxGKAksMEAy70zd/view?usp=sharing",
    available: true,
  },
  {
    title: "High-Level Design",
    description:
      "Architectural design, system components, interfaces, and implementation strategy.",
    icon: () => <BeakerIcon className="w-8 h-8 text-pink-400" />,
    link: "/docs/design.pdf",
    available: false,
  },
];
