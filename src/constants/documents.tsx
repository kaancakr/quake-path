import {
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
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
    link: "https://drive.google.com/file/d/1BReh9TfJvQDa991gosiLWPbPCD_IQ2PU/view?usp=sharing",
    available: true,
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
    link: "https://drive.google.com/file/d/1LNvzGGGkNaw3ddd55StJneHrgF8rkYIO/view?usp=drive_link",
    available: true,
  },
  {
    title: "Detailed Design Report",
    description:
      "Comprehensive detailed design documentation including component specifications, data structures, and algorithms.",
    icon: () => (
      <ClipboardDocumentCheckIcon className="w-8 h-8 text-green-400" />
    ),
    link: "https://drive.google.com/file/d/1E6hJNuWFz2u0faFLwCYCG_A-Hj733fRl/view?usp=sharing",
    available: true,
  },
  {
    title: "Multidisciplinary Engineering Analysis Report",
    description:
      "Cross-disciplinary analysis covering engineering, technical, and domain-specific aspects of the project.",
    icon: () => <AcademicCapIcon className="w-8 h-8 text-orange-400" />,
    link: "https://drive.google.com/file/d/1jkABZt0RwZapqJ76hRgC9anHTwCrzfl4/view?usp=sharing",
    available: true,
  },
  {
    title: "Final Report",
    description:
      "Comprehensive final project report summarizing all phases, outcomes, lessons learned, and future recommendations.",
    icon: () => <DocumentCheckIcon className="w-8 h-8 text-teal-400" />,
    link: "https://drive.google.com/file/d/1cpKEMyOwjI6lJ2zteoNDgrOWZpIRMSf-/view?usp=sharing",
    available: true,
  },
];
