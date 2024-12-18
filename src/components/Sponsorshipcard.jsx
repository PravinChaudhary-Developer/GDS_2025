import React from "react";
import { SiTicktick } from "react-icons/si";

const Sponsorshipcard = ({ details, bgcolor, bordercolor ,textcolor ,hoverbg}) => {
  const { option, title, price, available } = details;

  return (
    <section
      className={`relative p-8 grid gap-2 rounded-2xl w-full  bg-white border-2 ${bordercolor}`}
    >
      <div
        className={`absolute ${bgcolor} text-white  text-base p-2 rounded-bl-xl top-0 right-0 rounded-tr-xl`}
      >
        <p>{available}</p>
      </div>
      <p className="text-2xl font-semibold">{title}</p>
      <p className={`${textcolor} text-3xl font-sans font-bold`}>{price}</p>

      <ul className="my-3">
        {option.map((list, index) => (
          <li
            key={index}
            className="flex justify-start py-2 items-center gap-3"
          >
            <span>
              <SiTicktick className={`h-4 w-4 text-white ${bgcolor} rounded-full p-[2px]`} />
            </span>
            <p className="text-gray-700">{list}</p>
          </li>
        ))}
      </ul>

      <button
        className={` w-full py-2 text-white ${bgcolor} ${hoverbg} rounded-lg transition duration-300`}
        aria-label={`Contact for ${title} sponsorship`}
      >
        Contact for Sponsorship
      </button>
    </section>
  );
};

export default Sponsorshipcard;
