import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterFill } from "react-icons/ri";

const Meetcard = ({ detail }) => {
  const { name, title, description } = detail;
  return (
    <div className="duration-500 rounded-xl ease-in-out shadow hover:shadow-lg">
      <div className="w-full bg-sky-100 rounded-t-xl h-[60px] flex justify-center items-center">
        <IoPersonCircle className=" w-[74px] h-[74px]   text-sky-300" />
      </div>
      <div className="px-6 grid justify-start gap-3 py-6  ">
        <h1 className="text-[15pt] text-gray-900 font-semibold">{name}</h1>
        <h2 className="text-base text-sky-600 font-medium">{title}</h2>
        <p className="text-gray-600  text-[12pt] overflow-hidden">
          {description}
        </p>
        <div className="flex gap-2">
          <IoLogoLinkedin className="h-5 w-5 text-gray-700 hover:text-sky-600" />
          <RiTwitterFill className="h-5 w-5 text-gray-700 hover:text-sky-600" />
      </div>
      </div>

    </div>
  );
};

export default Meetcard;
