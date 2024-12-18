import React from "react";
import Title from "../components/Title";
import VenueManagecart from "../components/VenueManagecart";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaParking, FaWifi, FaPlane } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiPsychicWaves } from "react-icons/gi";
import { FaWheelchair } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";

const Venue = () => {
  const managment = [
    {
      id: 1,
      icon: <MdLocationOn className="h-6 w-6 text-sky-600" />,
      title: "Location",
      description: "Prime Convention Center, Ahmedabad, Gujarat",
      link: "Get Directions",
    },
    {
      id: 2,
      icon: <FaParking className="h-6 w-6 text-sky-600" />,
      title: "Parking",
      description: "Complimentary parking available for all attendees",
    },
    {
      id: 3,
      icon: <FaBuilding className="h-6 w-6 text-sky-600" />,
      title: "Accommodation",
      description: "Special rates available at partner hotels nearby",
      link: "View Hotel Partners",
    },
  ];

  const Highlights = [
    {
      id: 1,
      icon: <FaWifi className="h-5 w-5 text-sky-600" />,
      highlight: "High-speed WiFi coverage",
    },
    {
      id: 2,
      icon: <FaWheelchair className="h-5 w-5 text-sky-600" />,
      highlight: "Wheelchair accessible",
    },
    {
      id: 3,
      icon: <TbToolsKitchen2 className="h-5 w-5 text-sky-600" />,
      highlight: "On-site catering",
    },
    {
      id: 4,
      icon: <GiPsychicWaves className="h-5 w-5 text-sky-600" />,
      highlight: "State-of-the-art AV equipment",
    },
    {
      id: 5,
      highlight: "Climate controlled environment",
    },
  ];

  return (
    <>
      <Title title={"Venue"} discription={"Join us at a premium venue in Ahmedabad"} />

      <section className="w-full px-8 my-20 flex gap-20">
        <ul className="grid w-full gap-4">
          {managment.map((manage) => (
            <li key={manage.id}>
              <VenueManagecart details={manage} />
            </li>
          ))}
        </ul>

        <ul className="w-[90%] p-8 bg-pink-50 rounded-lg flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Venue Highlights</h1>
          <div>
            {Highlights.map((highlights) => {
              const { icon, highlight } = highlights;
              return (
                <li key={highlight} className="flex justify-start py-1 items-center gap-2">
                  <div>{icon}</div>
                  <p className="text-gray-800">{highlight}</p>
                </li>
              );
            })}
          </div>

          <hr className="w-full h-[1px] bg-gray-400" />

          <p className="font-medium">Getting There</p>

          <ul className="grid gap-2">
            <li className="flex items-center gap-3">
              <FaPlane className="h-4 w-4 text-sky-600" />
              <p className="text-gray-700">20 minutes from Ahmedabad International Airport</p>
            </li>
            <li className="flex items-center gap-3">
              <FaTrainSubway className="h-4 w-4 text-sky-600" />
              <p className="text-gray-700">15 minutes from Ahmedabad Junction Railway Station</p>
            </li>
          </ul>
        </ul>
      </section>
    </>
  );
};

export default Venue;
