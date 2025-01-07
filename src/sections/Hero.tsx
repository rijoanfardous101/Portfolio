"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { scrollToProjects, handleEmailClick } from "@/utils/utils";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-56 relative z-0 overflow-hidden "
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] hero-rings"></div>
      <div className="size-[820px] hero-rings"></div>
      <div className="size-[1020px] hero-rings"></div>
      <div className="size-[1220px] hero-rings"></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person behind a laptop"
          />
          <div className="bg-gray-200/80 border border-gray-300 px-4 py-1.5 inline-flex items-center gap-1.5 text-sm font-medium mt-1 rounded">
            <div className="bg-green-600 size-2.5 rounded-full"></div>
            <div>Open to new collaborations and opportunities</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl lg:text-5xl text-center mt-8 tracking-wide text-gray-800">
            Building High-Quality, Full-Stack Web Applications.
          </h1>
          <p className="mt-4 text-center text-gray-800">
            I specialize in transforming ideas into functional, high-performing
            web applications. Let&apos;s discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm mt-8">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 border border-gray-300 px-4 h-10 rounded-xl transform hover:bg-gray-300 duration-300"
          >
            <span className="font-semibold">Explore My Projects</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 border border-gray-700 px-8 h-10 rounded-xl bg-gray-700 text-white transform hover:bg-gray-600/90 duration-300"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
