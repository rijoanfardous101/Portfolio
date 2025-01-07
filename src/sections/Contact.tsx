"use client";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { handleEmailClick } from "@/utils/utils";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-300 to-sky-100 text-gray-900 py-8 px-10 rounded-3xl flex flex-col md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-lg tracking-wide">
              Let's create something amazing together !
            </h2>
            <p>
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div className="min-w-48">
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 border border-gray-700 px-8 h-10 rounded-xl bg-gray-700 text-white transform hover:bg-gray-600/90 duration-300"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
