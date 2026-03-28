export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
  description: string;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery shopping app design",
    title: "Market Research",
    description:
      "Analyze user needs, trends, and competitors in the grocery app space.",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    description: "Evaluate top grocery apps and identify strengths and gaps.",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "3",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    description: "Sketch basic layouts and flows for the redesigned app.",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "4",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    description: "Prepare a presentation explaining the design sprint process.",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "5",
    category: "Grocery shopping app design",
    title: "User Persona Creation",
    description: "Define target users with goals, behaviors, and pain points.",
    time: "11:00 AM",
    status: "Done",
    icon: { name: "user", backgroundColor: "#60A5FA" },
  },
  {
    id: "6",
    category: "Grocery shopping app design",
    title: "User Journey Mapping",
    description: "Map end-to-end user experience from discovery to checkout.",
    time: "02:00 PM",
    status: "In Progress",
    icon: { name: "map", backgroundColor: "#A78BFA" },
  },
  {
    id: "7",
    category: "Uber Eats redesign challenge",
    title: "High-fidelity UI Design",
    description:
      "Design polished UI screens with branding and visual elements.",
    time: "04:00 PM",
    status: "To-do",
    icon: { name: "layout", backgroundColor: "#34D399" },
  },
  {
    id: "8",
    category: "Uber Eats redesign challenge",
    title: "Prototype Testing",
    description: "Test interactive prototype with users and gather feedback.",
    time: "06:00 PM",
    status: "To-do",
    icon: { name: "play-circle", backgroundColor: "#F472B6" },
  },
  {
    id: "9",
    category: "Design System",
    title: "Create Color Palette",
    description: "Define primary, secondary, and neutral color schemes.",
    time: "01:00 PM",
    status: "Done",
    icon: { name: "droplet", backgroundColor: "#F87171" },
  },
  {
    id: "10",
    category: "Design System",
    title: "Typography Selection",
    description:
      "Choose fonts and define hierarchy for headings and body text.",
    time: "03:00 PM",
    status: "In Progress",
    icon: { name: "type", backgroundColor: "#22D3EE" },
  },
  {
    id: "11",
    category: "Mobile App Development",
    title: "Setup React Native Project",
    description: "Initialize project structure and install dependencies.",
    time: "09:30 AM",
    status: "Done",
    icon: { name: "smartphone", backgroundColor: "#818CF8" },
  },
  {
    id: "12",
    category: "Mobile App Development",
    title: "Implement Navigation",
    description: "Set up stack and tab navigation across screens.",
    time: "11:30 AM",
    status: "In Progress",
    icon: { name: "navigation", backgroundColor: "#FB923C" },
  },
  {
    id: "13",
    category: "Mobile App Development",
    title: "API Integration",
    description: "Connect frontend with backend APIs and handle responses.",
    time: "05:00 PM",
    status: "To-do",
    icon: { name: "link", backgroundColor: "#38BDF8" },
  },
  {
    id: "14",
    category: "Testing",
    title: "Unit Testing Components",
    description: "Write and run tests for UI components and logic.",
    time: "08:00 PM",
    status: "To-do",
    icon: { name: "check-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "15",
    category: "Testing",
    title: "Fix UI Bugs",
    description: "Identify and resolve layout and interaction issues.",
    time: "07:30 PM",
    status: "In Progress",
    icon: { name: "tool", backgroundColor: "#FACC15" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To do",
  "In Progress",
  "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
