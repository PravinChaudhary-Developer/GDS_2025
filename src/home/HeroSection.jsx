import React from "react";
import { GoArrowDown } from "react-icons/go";

const HeroSection = () => {
  return (
    <main className="h-[520px] mt-14 flex justify-center items-center ">
      {/* heading main */}
      <div className="text-center grid gap-6">
        <h1 className="text-6xl text-gray-900 font-semibold">
          Digital Gujarat Summit <span className="text-sky-600">2025</span>
        </h1>

        <h3 className="text-2xl text-gray-600 ">
          Join the biggest digital marketing event in Gujarat
        </h3>

        <p className="text-gray-700 text-lg">February 9th, 2025 • Ahmedabad</p>

        <div className="flex opacity-60 mt-4 justify-center items-center gap-6">
          <button className="p-3 hover:bg-sky-700 font-semibold px-8 text-lg bg-sky-600 rounded-lg text-white">
            {" "}
            Register Now
          </button>
          <button className="p-3 px-8 text-lg outline-none border-2 text-sky-600 rounded-lg border-sky-600">
            {" "}
            Learn More
          </button>
        </div>

        <div className="animate-bounce mt-8">
          <p className="text-gray-500"> Scroll to explore</p>
          <GoArrowDown className="h-6 text-gray-500 grid justify-center mx-auto w-6" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
