import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
const VenueManagecart = ({ details }) => {
  const { icon, title, description, link } = details;
  return (
    <div className="flex rounded-lg bg-white p-7 gap-4 shadow-lg">
      <div className="h-12 rounded-md flex items-center justify-center w-12 p-2 text-lg bg-sky-100">
        {icon}
      </div>
      <ul className="grid gap-2">
        <li>
          <p className="text-xl font-semibold">{title}</p>
        </li>
        <li>
          <p className="text-gray-600">{description}</p>
        </li>
        {link && (
          <li>
            <button className="flex justify-start items-center gap-2">
              <p className="text-sky-600 ">{link}</p>
              <HiArrowLongRight className="h-6 text-sky-600 w-6" />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default VenueManagecart;
