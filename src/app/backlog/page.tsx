"use client";

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
}

const dummyBacklogItems: BacklogItem[] = [
  {
    id: "1",
    title: "Mobile App UI Implementation",
    description:
      "Implement responsive UI components and screens for the mobile application",
    priority: "high",
    status: "in-progress",
    storyPoints: 8,
    sprint: "Sprint 1",
    assignee: "Eren Kaan Çakır",
    type: "feature",
  },
  {
    id: "2",
    title: "API Integration for Mobile",
    description:
      "Integrate backend APIs with mobile application and handle responses",
    priority: "high",
    status: "in-progress",
    storyPoints: 5,
    sprint: "Sprint 1",
    assignee: "Eren Kaan Çakır",
    type: "feature",
  },
  {
    id: "3",
    title: "Backend API Development",
    description:
      "Develop RESTful APIs for user authentication and data management",
    priority: "high",
    status: "in-progress",
    storyPoints: 13,
    sprint: "Sprint 1",
    assignee: "Berke Beyazbenli",
    type: "feature",
  },
  {
    id: "4",
    title: "Database Schema Design",
    description:
      "Design and implement database schema with proper indexing and relationships",
    priority: "medium",
    status: "in-progress",
    storyPoints: 8,
    sprint: "Sprint 1",
    assignee: "Berke Beyazbenli",
    type: "feature",
  },
  {
    id: "5",
    title: "Project Documentation",
    description:
      "Create comprehensive project documentation and API specifications",
    priority: "medium",
    status: "done",
    storyPoints: 5,
    sprint: "Sprint 2",
    assignee: "Selin Siviş",
    type: "enhancement",
  },
  {
    id: "6",
    title: "User Testing Plan",
    description:
      "Develop and implement user testing strategy and feedback collection",
    priority: "medium",
    status: "todo",
    storyPoints: 3,
    sprint: "Sprint 2",
    assignee: "Selin Siviş",
    type: "enhancement",
  },
  {
    id: "7",
    title: "Mobile App Performance Optimization",
    description: "Optimize mobile app performance and reduce load times",
    priority: "low",
    status: "todo",
    storyPoints: 5,
    sprint: "Sprint 2",
    assignee: "Eren Kaan Çakır",
    type: "enhancement",
  },
  {
    id: "8",
    title: "Backend Security Implementation",
    description: "Implement security measures and data encryption",
    priority: "high",
    status: "todo",
    storyPoints: 8,
    sprint: "Sprint 2",
    assignee: "Berke Beyazbenli",
    type: "feature",
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

export default function BacklogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2 py-2">
            Project Backlog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Track and manage your project&apos;s development progress
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
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
            <h3 className="text-sm font-medium text-gray-400">In Progress</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {
                dummyBacklogItems.filter(
                  (item) => item.status === "in-progress"
                ).length
              }
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[200px] border border-gray-700/20">
            <h3 className="text-sm font-medium text-gray-400">Completed</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {
                dummyBacklogItems.filter((item) => item.status === "done")
                  .length
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyBacklogItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/20"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
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
                  <span className="text-sm font-medium text-gray-400">
                    {item.storyPoints} SP
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
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
                    <span className="text-sm text-gray-400">{item.sprint}</span>
                  </div>
                  <span className="text-sm text-gray-400">{item.assignee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
