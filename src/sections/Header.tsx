"use client";
import {
  scrollToAbout,
  scrollToContact,
  scrollToHome,
  scrollToProjects,
} from "@/utils/utils";

export const Header = () => {
  return (
    <div className="flex justify-center items-center top-3 fixed z-30 left-1/2 -translate-x-1/2">
      <nav className="flex gap-1 p-0.5 border border-gray-300 rounded-full backdrop-blur">
        <button onClick={scrollToHome} className="nav-item">
          Home
        </button>
        <button onClick={scrollToProjects} className="nav-item">
          Projects
        </button>
        <button onClick={scrollToAbout} className="nav-item">
          About
        </button>
        <button
          onClick={scrollToContact}
          className="nav-item bg-gray-600 text-white hover:bg-gray-500"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
