import React from "react";
import Title from "../components/Title";
import Eventcard from "../components/Eventcard";
import peoples from "../assets/peoples.ico"
import screenpeople from "../assets/screenpeople.ico"
import code from "../assets/code.ico"
import WhyAttendDGS from "../components/whyAttendDGS";



const AboutTheEvent = () => {
  const About = [
    {
      id: 1,
      iconImage:peoples,
      title: "Networking Sessions",
      description:
        "Connect with industry leaders, entrepreneurs, and fellow digital professionals in engaging networking sessions.",
    },
    {
      id: 2,
      iconImage: screenpeople,
      title: "Expert Panels",
      description:
        "Gain insights from industry experts through interactive panel discussions and Q&A sessions.",
    },
    {
      id: 3,
      iconImage: code,
      title: "Workshops",
      description:
        "Participate in hands-on workshops to learn practical skills and strategies for digital success.",
    },
  ];

  return (
    <>
      <Title title={"About The Event"} />

      <section className="p-12">
        <ul className="grid lg:grid-cols-3 justify-between items-center">
          {About.map((events) => {
            return (
              <li key={events.id} className="">
                <Eventcard details={events} />
              </li>
            );
          })}
        </ul>
      </section>

      <WhyAttendDGS />

    </>
  );
};

export default AboutTheEvent;
