import React from "react";
import Title from "../components/Title";
import Meetcard from "../components/Meetcard";
import { MdChevronRight } from "react-icons/md";

const MeetOurSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Rajesh Patel",
      title: "Digital Marketing Expert",
      description: "10+ years of experience in SEO and content strategy",
    },
    {
      id: 2,
      name: "Priya Shah",
      title: "E-commerce Strategist",
      description: "Founder of multiple successful online businesses",
    },
    {
      id: 3,
      name: "Amit Sharma",
      title: "Social Media Expert",
      description: "Leading social media campaigns for major brands",
    },
  ];
  return (
    <>
      

      <section className="py-2">
        <Title
          title={"Meet Our Speakers"}
          discription={
            "Learn from the best minds in digital marketing and entrepreneurship"
          }
        />

        <section className="p-10 mt-6">
          <ul className="grid lg:grid-cols-3 justify-between items-center gap-8">
            {speakers.map((speaker) => {
              return (
                <li key={speaker.id} className="">
                  <Meetcard detail={speaker} />
                </li>
              );
            })}
          </ul>
        </section>

        <div className="flex  items-center justify-center">
          <button className="px-5 py-3 flex items-center gap-1 justify-center text-sky-600 hover:bg-sky-600  hover:text-white font-medium duration-300 ease-in-out text-base outline-none  rounded-lg bg-white border-2 border-sky-600">
            View All Speakers{" "}
            <span>
              {" "}
              <MdChevronRight className="h-6 w-6" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default MeetOurSpeakers;
