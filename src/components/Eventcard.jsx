import React from "react";

const Eventcard = ({ details }) => {
  const { iconImage, title, description } = details;

  return (
    <div className="w-full rounded-xl duration-500 ease-in-out grid justify-start items-start gap-2  p-4 shadow hover:shadow-lg">
      <img src={iconImage} alt={`${title} Image`} className="h-11 p-2 w-11 bg-sky-100 rounded-md text-white" />
      <h1 className="text-[15pt] text-gray-900 font-semibold">{title}</h1>
      <p className="text-gray-600 h-24 text-[12pt] w-[345px]">{description}</p>
    </div>
  );
};

export default Eventcard;
