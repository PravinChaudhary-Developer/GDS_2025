import React from "react";
import { SiTicktick } from "react-icons/si";

const WhyAttendDGS = () => {
  const option = [
    "Learn from industry leaders and experts",
    "Network with fellow digital professionals",
    "Gain actionable insights and strategies",
    "Access exclusive tools and resources",
  ];
  return (
    <>
      <main className="flex bg-gradient-to-r mb-32 from-sky-50 to-green-50  m-10 p-12 justify-between items-center">
        <section className="grid gap-4">
          <h1 className="text-3xl text-gray-900 font-semibold">
            Why Attend DGS 2025?
          </h1>
          <ul className=" ">
            {option.map((list, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-start py-2  items-center gap-3"
                >
                  <span>
                    <SiTicktick className="h-6 w-6 text-white bg-sky-600 rounded-full p-1 " />
                  </span>
                  <p className="text-gray-700"> {list} </p>
                </li>
              );
            })}
          </ul>

          <button className="px-7 w-fit ease-in-out rounded-lg py-3 hover:bg-sky-700 duration-300 text-white bg-sky-600 text-base ">
            Reserve Your Spot
          </button>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-xl">
          <div className="text-right grid gap-2">
            <p className="text-sky-600 text-4xl font-semibold ">200+</p>
            <p className="text-gray-600">Expected Attendees</p>

            <p className="text-sky-600 text-4xl font-semibold ">15+</p>
            <p className="text-gray-600">Expert Speakers</p>

            <p className="text-sky-600 text-4xl font-semibold ">10+</p>
            <p className="text-gray-600">Interactive Sessions</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyAttendDGS;
