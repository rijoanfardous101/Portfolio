import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import resumeImage from "@/assets/images/Resume.png";
import dhakaMap from "@/assets/images/dhaka-map.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiExpress, SiMongodb } from "react-icons/si";
import { PiFileCSharp, PiFileSql } from "react-icons/pi";

const tools = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="size-6" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="size-6" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="size-6" />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="size-6 scale-[115%]" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="size-6" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="size-6" />,
  },
  {
    name: "ReactJS",
    icon: <FaReact className="size-6" />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill className="size-6" />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs className="size-6" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="size-6" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="size-6" />,
  },
  {
    name: "C#",
    icon: <PiFileCSharp className="size-6" />,
  },
  {
    name: "Core",
    icon: <SiDotnet className="size-6" />,
  },
  {
    name: "SQL",
    icon: <PiFileSql className="size-6" />,
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="relative pt-12 z-0">
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container max-w-4xl mx-auto">
        <SectionHeader />
        <div>
          <div className="flex flex-col md:flex-row mt-12 gap-6">
            <div className="flex justify-evenly">
              <div className="md:min-w-60 border p-4 pb-0 rounded-lg bg-white/50 flex flex-col gap-2 justify-between shadow-sm">
                <h2 className="text-center font-serif text-xl tracking-wide">
                  My Resume
                </h2>
                <a
                  href="https://drive.google.com/file/d/1rm5jkZRO2gDqQeOdUh8v49i0akyPDzDU/view"
                  target="blank"
                >
                  <Image
                    src={resumeImage.src}
                    alt="Rijoan Fardous Resume"
                    width={150}
                    height={150}
                    className="mx-auto border"
                  />
                </a>
              </div>
              <div className="md:min-w-60 border p-4 rounded-xl bg-white/50 md:hidden shadow-sm">
                <Image
                  src={dhakaMap.src}
                  alt="Dhaka, Bangladesh Map"
                  width={150}
                  height={150}
                  className="mx-auto rounded-lg border-2"
                />
              </div>
            </div>
            <div className="border p-4 pb-0 rounded-lg bg-white/50 flex flex-col gap-2 flex-grow shadow-sm">
              <h2 className="text-center font-serif text-xl tracking-wide">
                Education
              </h2>
              <div className="pr-4 pt-2">
                <div className="flex justify-between font-medium">
                  <div>Bachelor of Science (BSc)</div>
                  <div className="text-sm">2020 - 2025</div>
                </div>
                <div className="text-3xl font-serif tracking-wide text-gray-700 my-1">
                  Computer Science and Engineering.
                </div>
                <div className="font-semibold text-gray-600">
                  American International University - Bangladesh.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-6 gap-6">
            <div className="border p-4 rounded-lg bg-white/50 flex flex-col gap-2 flex-grow shadow-sm ">
              <h2 className="text-center font-serif text-xl tracking-wide ">
                Tools and Technologies
              </h2>
              <div className="flex flex-wrap gap-2 justify-between mt-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="border border-stone-300 p-2 pr-2.5 flex rounded-lg text-sm font-semibold gap-1 items-center shadow-sm bg-gradient-to-tr from-gray-100 to-white"
                  >
                    {tool.icon}
                    <div>{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:min-w-60 border p-4 rounded-xl bg-white/50 md:block shadow-sm">
              <Image
                src={dhakaMap.src}
                alt="Dhaka, Bangladesh Map"
                width={225}
                height={225}
                className="mx-auto rounded-lg border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
