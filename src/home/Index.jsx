import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { FaArrowUp } from "react-icons/fa";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navigation />
      <Outlet />

      <div className="relative">
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-4 right-4 bg-sky-500 p-3 rounded-full shadow-md hover:bg-sky-600 duration-300 ease-in-out"
        >
          <FaArrowUp className="h-6 w-6 text-white" />
        </button>
      </div>
    </>
  );
};

export default Index;
