import nextCareerWebImg from "@/assets/images/next-career-image.png";
import chatAppWebImg from "@/assets/images/chat-app-image.png";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "QuickChat App",
    year: "2024",
    title: "Full-Stack Real-Time Chat Application.",
    description:
      "Quick-Chat is a full-stack chat application that allows users to communicate in real-time, providing features like authentication, updating profile picture, and a customizable theme. Built using modern web technologies, it allows users to send messages instantly and manage their accounts with ease.",
    techUsed: [
      "React",
      "TailwindCSS",
      "DaisyUI",
      "React Router",
      "Zustand",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "JWT",
    ],
    codeLink: "https://github.com/rijoanfardous101/quick-chat-app",
    liveLink: "https://quick-chat-app-a8qj.onrender.com/",
    image: chatAppWebImg,
  },
  {
    company: "Next Career App",
    year: "2024",
    title: "Full-Stack LinkedIn Clone Application.",
    description:
      "Developed a networking platform where users can create profiles, connect with others, share posts, and interact through likes and comments. The app allows secure sign-up and login, profile management with photo uploads, and the ability to send and manage connection requests, fostering professional networking and engagement.",
    techUsed: [
      "React",
      "TailwindCSS",
      "DaisyUI",
      "React Router",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    codeLink: "https://github.com/rijoanfardous101/next-career",
    liveLink: "https://next-career.onrender.com/",
    image: nextCareerWebImg,
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-gray-100 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container pt-16 mb-8">
        <h2 className="text-center font-serif text-2xl tracking-wide">
          Featured Projects
        </h2>
      </div>
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 ">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="border p-8 mt-8 flex flex-col lg:flex-row gap-8 rounded-lg overflow-hidden shadow relative bg-white/70 z-10 "
          >
            <div>
              <div className="flex gap-3 items-center font-serif tracking-wider text-sky-800">
                <span>{project.company}</span>
                <span className="w-2 bg-gray-500 rounded-full h-2"></span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif tracking-wide text-2xl mt-2 text-slate-700">
                {project.title}
              </h3>
              <p className="mt-4 text-sm  text-gray-700">
                {project.description}
              </p>
              <div className="flex gap-1.5 flex-wrap mt-6">
                {project.techUsed.map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-200 text-xs py-0.5 px-2 rounded-full"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="mt-6 font-medium flex gap-4">
                <a
                  href={project.liveLink}
                  target="blank"
                  className="inline-flex items-center gap-2 border border-gray-200 px-4 h-8 rounded-xl transform hover:bg-gray-200 duration-300 text-sm"
                >
                  <span>Live Project</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={project.codeLink}
                  target="blank"
                  className="inline-flex items-center gap-2 border border-gray-700 px-4 h-8 rounded-xl transform bg-gray-700 text-white hover:bg-gray-600 duration-300 group text-sm"
                >
                  <span>GitHub Code</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="min-w-72 relative">
              <Image
                src={project.image.src}
                alt="project demo"
                width={1000}
                height={1000}
                className="lg:max-w-lg lg:absolute"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
