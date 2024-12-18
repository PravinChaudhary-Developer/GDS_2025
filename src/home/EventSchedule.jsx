import React from "react";
import Title from "../components/Title";
import EventTime from "../components/EventTime";
import { GoDotFill } from "react-icons/go";

const EventSchedule = () => {
  const eventTime = [
    {
      id: 1,
      time: "08:30 AM - 09:30 AM",
      title: "Registration & Breakfast",
      description:
        "Check-in, collect your badge, and enjoy networking breakfast",
    },
    {
      id: 2,
      time: "09:30 AM - 10:30 AM",
      title: "Opening Keynote",
      description: "The Future of Digital Marketing in Gujarat",
    },
    {
      id: 3,
      time: "10:45 AM - 12:00 PM",
      title: "Panel Discussion",
      description: "SEO Strategies for 2025 & Beyond",
    },
    {
      id: 4,
      time: "12:00 PM - 01:30 PM",
      title: "Networking Lunch",
      description: "Connect with fellow attendees over lunch",
    },
    {
      id: 5,
      time: "01:30 PM - 03:30 PM",
      title: "Parallel Workshops",
      description: "Choose from multiple hands-on workshop sessions",
    },
    {
      id: 6,
      time: "03:45 PM - 05:00 PM",
      title: "Closing Keynote & Awards",
      description: "Final insights and recognition of achievers",
    },
  ];

  return (
    <>

      <section className="m-8  my-24">
        <Title
          title={"Event Schedule"}
          discription={
            "February 9th, 2025 • A Full Day of Learning & Networking"
          }
        />

        <div className="relative my-12 w-full  flex justify-center">
          <ul className="w-full   ">
          <span className="w-[2px] absolute h-full bg-gradient-to-b  from-sky-400 to-green-600/75"></span>

            {eventTime.map((event) => (
              <li
                key={event.id}
                className={`relative flex ${
                  event.id % 2 === 0
                    ? "justify-end text-start"
                    : "justify-start pl-16 "
                } w-full mb-8 `}
              >

                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <GoDotFill className="h-8 w-8 text-sky-600" />
                </span>

                <div
                  className={`w-[45%] p-2 rounded-lg bg-gray-50  ${
                    event.id % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <EventTime details={event} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
        <button className="px-7 w-fit rounded-lg ease-in-out py-3 hover:bg-sky-700 duration-300 text-white bg-sky-600 text-base ">
            Reserve Your Spot Now
          </button></div>
      </section>
    </>
  );
};

export default EventSchedule;
