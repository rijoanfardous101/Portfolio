import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto p-4 bg-gradient-to-b from-gray-100 to-sky-50 text-gray-900 ">
      <hr className="border-t-1.5 border-gray-300" />
      <div className="container flex justify-between py-4 pt-6">
        <div className="text-sm text-gray-700">
          &copy; 2025. All rights reserved.
        </div>
        <div className="flex gap-1">
          <a
            href="https://github.com/rijoanfardous101"
            target="blank"
            className="inline-flex items-center gap-2  px-4 h-8 transform hover:underline duration-300 text-sm"
          >
            <span>GitHub</span>
            <ArrowUpRight className="size-4" />
          </a>

          <a
            href="https://www.facebook.com/rijoan.fardous23/"
            target="blank"
            className="inline-flex items-center gap-2  px-4 h-8 transform hover:underline duration-300 text-sm"
          >
            <span>Facebook</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
