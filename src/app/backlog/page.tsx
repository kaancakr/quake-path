"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface BacklogItem {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "in-progress" | "done";
  storyPoints: number;
  sprint: string;
  assignee: string;
  type: "feature" | "bug" | "enhancement";
  date: string;
}

const dummyBacklogItems: BacklogItem[] = [
  // Phase 1: Project Initiation & Planning
  {
    id: "1",
    title: "Project Proposal & Initial Research",
    description:
      "Conduct research on earthquake disaster management systems, identify problem domain, and create initial project proposal document",
    priority: "high",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 1",
    assignee: "Selin Siviş",
    type: "feature",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Requirements Gathering & Analysis",
    description:
      "Gather user requirements, analyze stakeholder needs, and document functional and non-functional requirements",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 1",
    assignee: "Selin Siviş",
    type: "feature",
    date: "2024-01-22",
  },
  {
    id: "3",
    title: "Project Analysis Report",
    description:
      "Create comprehensive analysis report covering problem domain, user needs, technical constraints, and market research",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 1",
    assignee: "Selin Siviş",
    type: "enhancement",
    date: "2024-01-29",
  },

  // Phase 2: System Design & Architecture
  {
    id: "4",
    title: "System Architecture Design",
    description:
      "Design high-level system architecture, define components, interfaces, and technology stack selection",
    priority: "high",
    status: "done",
    storyPoints: 13,
    sprint: "Sprint 2",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-02-05",
  },
  {
    id: "5",
    title: "Database Schema Design",
    description:
      "Design and model database schema with proper indexing, relationships, and data normalization",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 2",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-02-12",
  },
  {
    id: "6",
    title: "API Design & Specifications",
    description:
      "Design RESTful API endpoints, request/response models, and create API documentation",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 2",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-02-19",
  },
  {
    id: "7",
    title: "UI/UX Design & Wireframes",
    description:
      "Create user interface mockups, wireframes, and design system for the web application",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 2",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-02-26",
  },

  // Phase 3: Development Setup
  {
    id: "8",
    title: "Project Setup & Configuration",
    description:
      "Initialize Next.js project, configure TypeScript, Tailwind CSS, ESLint, and development environment",
    priority: "high",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 3",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-03-05",
  },
  {
    id: "9",
    title: "Component Library Setup",
    description:
      "Set up reusable component structure, create base components, and establish design patterns",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 3",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-03-12",
  },

  // Phase 4: Core Features Development
  {
    id: "10",
    title: "Hero Section Implementation",
    description:
      "Develop animated hero section with gradient backgrounds, text animations, and call-to-action buttons",
    priority: "high",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 3",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-03-19",
  },
  {
    id: "11",
    title: "Real-time Damage Mapping Feature",
    description:
      "Implement interactive map component for visualizing earthquake-affected areas and damage assessment",
    priority: "high",
    status: "done",
    storyPoints: 13,
    sprint: "Sprint 4",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-03-26",
  },
  {
    id: "12",
    title: "Rescue Coordination Module",
    description:
      "Build rescue coordination system with real-time victim location tracking and rescue team management",
    priority: "high",
    status: "done",
    storyPoints: 13,
    sprint: "Sprint 4",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-02",
  },
  {
    id: "13",
    title: "Preparation Mode Feature",
    description:
      "Develop pre-disaster preparation tools including evacuation route planning and emergency supply management",
    priority: "high",
    status: "done",
    storyPoints: 13,
    sprint: "Sprint 5",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-09",
  },
  {
    id: "14",
    title: "Features Section Component",
    description:
      "Create animated features showcase section with cards displaying key application capabilities",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 5",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-16",
  },

  // Phase 5: Backend Development
  {
    id: "15",
    title: "Backend API Development",
    description:
      "Develop RESTful APIs for user authentication, data management, and real-time data synchronization",
    priority: "high",
    status: "done",
    storyPoints: 13,
    sprint: "Sprint 3",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-03-19",
  },
  {
    id: "16",
    title: "Database Implementation",
    description:
      "Implement database schema, set up migrations, and create data access layer",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 3",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-03-26",
  },
  {
    id: "17",
    title: "Backend Security Implementation",
    description:
      "Implement authentication, authorization, data encryption, and security best practices",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 4",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-04-02",
  },
  {
    id: "18",
    title: "API Integration & Testing",
    description:
      "Integrate frontend with backend APIs, handle responses, and implement error handling",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 5",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-04-16",
  },

  // Phase 6: Additional Pages & Features
  {
    id: "19",
    title: "About Page Development",
    description:
      "Create team member showcase page with profiles, roles, and LinkedIn integration",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 5",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-23",
  },
  {
    id: "20",
    title: "Contact Page Implementation",
    description:
      "Develop contact page with form handling and communication features",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 6",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-30",
  },
  {
    id: "21",
    title: "Documentation Page",
    description:
      "Create documentation page displaying project proposals, analysis reports, and technical specifications",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 6",
    assignee: "Selin Siviş",
    type: "enhancement",
    date: "2024-04-30",
  },
  {
    id: "22",
    title: "Download Page Development",
    description:
      "Implement download page for application distribution and version management",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 6",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-05-07",
  },
  {
    id: "23",
    title: "Navigation & Layout Components",
    description:
      "Develop responsive navbar, footer, and layout components with smooth navigation",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 4",
    assignee: "Eren Kaan Çakır",
    type: "feature",
    date: "2024-04-09",
  },

  // Phase 7: Enhancement & Polish
  {
    id: "24",
    title: "Animation & Transitions",
    description:
      "Implement smooth animations, page transitions, and interactive UI elements using Framer Motion",
    priority: "medium",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 6",
    assignee: "Eren Kaan Çakır",
    type: "enhancement",
    date: "2024-05-07",
  },
  {
    id: "25",
    title: "Responsive Design Optimization",
    description:
      "Optimize application for mobile, tablet, and desktop views with responsive breakpoints",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 6",
    assignee: "Eren Kaan Çakır",
    type: "enhancement",
    date: "2024-05-14",
  },
  {
    id: "26",
    title: "Performance Optimization",
    description:
      "Optimize application performance, reduce load times, implement code splitting and lazy loading",
    priority: "medium",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 7",
    assignee: "Eren Kaan Çakır",
    type: "enhancement",
    date: "2024-05-21",
  },
  {
    id: "27",
    title: "Accessibility Improvements",
    description:
      "Implement ARIA labels, keyboard navigation, and ensure WCAG compliance",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 7",
    assignee: "Eren Kaan Çakır",
    type: "enhancement",
    date: "2024-05-21",
  },

  // Phase 8: Testing & Quality Assurance
  {
    id: "28",
    title: "Unit Testing Implementation",
    description:
      "Write and execute unit tests for critical components and utility functions",
    priority: "medium",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 7",
    assignee: "Berke Beyazbenli",
    type: "enhancement",
    date: "2024-05-28",
  },
  {
    id: "29",
    title: "Integration Testing",
    description:
      "Perform integration testing for API endpoints and frontend-backend communication",
    priority: "medium",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 7",
    assignee: "Berke Beyazbenli",
    type: "enhancement",
    date: "2024-05-28",
  },
  {
    id: "30",
    title: "User Testing & Feedback Collection",
    description:
      "Conduct user testing sessions, collect feedback, and iterate based on user insights",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 8",
    assignee: "Selin Siviş",
    type: "enhancement",
    date: "2024-06-04",
  },

  // Phase 9: Documentation & Deployment
  {
    id: "31",
    title: "Technical Documentation",
    description:
      "Create comprehensive technical documentation including API specs, architecture diagrams, and deployment guides",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 8",
    assignee: "Selin Siviş",
    type: "enhancement",
    date: "2024-06-04",
  },
  {
    id: "32",
    title: "Project Documentation Finalization",
    description:
      "Finalize project proposal, analysis report, and high-level design documents",
    priority: "high",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 8",
    assignee: "Selin Siviş",
    type: "enhancement",
    date: "2024-06-11",
  },
  {
    id: "33",
    title: "Production Deployment Setup",
    description:
      "Configure production environment, set up CI/CD pipeline, and prepare for deployment",
    priority: "high",
    status: "done",
    storyPoints: 8,
    sprint: "Sprint 8",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-06-11",
  },
  {
    id: "34",
    title: "Application Deployment",
    description:
      "Deploy application to production environment, perform smoke tests, and verify functionality",
    priority: "high",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 8",
    assignee: "Berke Beyazbenli",
    type: "feature",
    date: "2024-06-18",
  },
  {
    id: "35",
    title: "Post-Deployment Monitoring",
    description:
      "Set up monitoring, logging, and error tracking for production environment",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 8",
    assignee: "Berke Beyazbenli",
    type: "enhancement",
    date: "2024-06-18",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-blue-100 text-blue-800";
    case "bug":
      return "bg-red-100 text-red-800";
    case "enhancement":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStoryPointExplanation = (points: number, title: string) => {
  const explanations: Record<
    number,
    { effort: string; complexity: string; time: string }
  > = {
    5: {
      effort: "Low",
      complexity:
        "Simple task with clear requirements and minimal dependencies",
      time: "1-2 days",
    },
    8: {
      effort: "Medium",
      complexity:
        "Moderate complexity with some dependencies and potential unknowns",
      time: "3-5 days",
    },
    13: {
      effort: "High",
      complexity:
        "Complex task with multiple components, dependencies, and significant technical challenges",
      time: "1-2 weeks",
    },
  };

  const explanation = explanations[points] || {
    effort: "Variable",
    complexity: "Complexity varies based on specific requirements",
    time: "Variable",
  };

  return {
    points,
    title,
    ...explanation,
  };
};

export default function BacklogPage() {
  const [selectedStoryPoint, setSelectedStoryPoint] = useState<{
    points: number;
    title: string;
  } | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleStoryPointClick = (points: number, title: string) => {
    setSelectedStoryPoint({ points, title });
  };

  const closePopup = () => {
    setSelectedStoryPoint(null);
  };

  const completedCount = dummyBacklogItems.filter(
    (item) => item.status === "done"
  ).length;
  const totalCount = dummyBacklogItems.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  // Group items by sprint for better organization
  const itemsBySprint = dummyBacklogItems.reduce((acc, item) => {
    if (!acc[item.sprint]) {
      acc[item.sprint] = [];
    }
    acc[item.sprint].push(item);
    return acc;
  }, {} as Record<string, typeof dummyBacklogItems>);

  const sortedSprints = Object.keys(itemsBySprint).sort((a, b) => {
    const sprintNumA = parseInt(a.replace("Sprint ", ""));
    const sprintNumB = parseInt(b.replace("Sprint ", ""));
    return sprintNumA - sprintNumB;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2 py-2">
            Project Backlog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Complete project development timeline from inception to deployment
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[200px] border border-gray-700/20">
            <h3 className="text-sm font-medium text-gray-400">
              Total Story Points
            </h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {dummyBacklogItems.reduce(
                (sum, item) => sum + item.storyPoints,
                0
              )}
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[200px] border border-gray-700/20">
            <h3 className="text-sm font-medium text-gray-400">Completed</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {completedCount} / {totalCount}
            </p>
            <div className="mt-2 w-full bg-gray-700/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-gray-400">
              {completionPercentage}% Complete
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[200px] border border-gray-700/20">
            <h3 className="text-sm font-medium text-gray-400">Total Sprints</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {sortedSprints.length}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {sortedSprints[0]} - {sortedSprints[sortedSprints.length - 1]}
            </p>
          </div>
        </div>

        {sortedSprints.map((sprint) => (
          <div key={sprint} className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mr-4">
                {sprint}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
              <span className="ml-4 text-sm text-gray-400">
                {itemsBySprint[sprint].length} items
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {itemsBySprint[sprint]
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      handleStoryPointClick(item.storyPoints, item.title)
                    }
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/20 hover:border-blue-500/40 group cursor-pointer"
                  >
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 flex-wrap gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                              item.type
                            )}`}
                          >
                            {item.type}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              item.priority === "high"
                                ? "bg-red-900/30 text-red-400"
                                : item.priority === "medium"
                                ? "bg-yellow-900/30 text-yellow-400"
                                : "bg-green-900/30 text-green-400"
                            }`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-300 whitespace-nowrap px-3 py-1.5 rounded-lg border border-gray-600/30">
                          {item.storyPoints} SP
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow">
                        {item.description}
                      </p>
                      <div className="pt-4 border-t border-gray-700/30">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                item.status === "done"
                                  ? "bg-green-900/30 text-green-400"
                                  : item.status === "in-progress"
                                  ? "bg-blue-900/30 text-blue-400"
                                  : "bg-gray-900/30 text-gray-400"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {item.sprint}
                          </span>
                          <span className="text-xs text-gray-400 truncate max-w-[120px]">
                            {item.assignee}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Story Point Explanation Popup */}
        {selectedStoryPoint && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-200"
            onClick={closePopup}
          >
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700/50 p-6 transform transition-all duration-200 relative z-[101]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Story Point Details
                </h3>
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700/50"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    {selectedStoryPoint.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl font-bold text-white">
                      {selectedStoryPoint.points}
                    </span>
                    <span className="text-gray-400">Story Points</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-400 mb-1">
                      Effort Level
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {
                        getStoryPointExplanation(
                          selectedStoryPoint.points,
                          selectedStoryPoint.title
                        ).effort
                      }
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-400 mb-1">
                      Complexity
                    </div>
                    <div className="text-sm text-gray-300">
                      {
                        getStoryPointExplanation(
                          selectedStoryPoint.points,
                          selectedStoryPoint.title
                        ).complexity
                      }
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-400 mb-1">
                      Estimated Time
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {
                        getStoryPointExplanation(
                          selectedStoryPoint.points,
                          selectedStoryPoint.title
                        ).time
                      }
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-xs text-gray-400">
                    Story points represent relative effort and complexity rather
                    than absolute time. They help teams estimate work and plan
                    sprints effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
