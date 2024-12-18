import React from "react";
import HeroSection from "./HeroSection";
import AboutTheEvent from "./AboutTheEvent";
import MeetOurSpeakers from "./MeetOurSpeakers";
import EventSchedule from "./EventSchedule";
import SponsorshipPackage from "./SponsorshipPackage";
import Venue from "./Venue";
import Register from "./Register";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutTheEvent />
      <MeetOurSpeakers />
      <EventSchedule />
      <SponsorshipPackage />
      <Venue />
      <Register />
    </>
  );
};

export default Home;
