export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
}

export const ProjectsData: Project[] = [
  {
    id: 1,
    name: "Lorem Ipsum Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit euismod, volutpat lorem vel, suscipit lorem.",
    tools: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
    role: "Frontend Developer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Dolor Sit Amet App",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    tools: ["Sed", "Eiusmod", "Tempor", "Incididunt", "Labore"],
    role: "Backend Developer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "Consectetur Adipiscing Elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tools: ["Duis", "Aute", "Irure", "Dolor", "Voluptate"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 4,
    name: "Ut Enim Minim Veniam",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tools: ["Excepteur", "Sint", "Occaecat", "Cupidatat", "Proident"],
    role: "UI/UX Designer",
    code: "",
    demo: "",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
