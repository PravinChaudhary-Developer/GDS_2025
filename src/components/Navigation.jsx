import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = ["About", "Speakers", "Schedule", "Sponsors"];

  const goToPage = (link) => {
    switch (link) {
      case "About":
        window.scrollTo({
          top: 500,
          behavior: "smooth",
        });
        break;
      case "Speakers":
        window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });
        break;

      case "Schedule":
        window.scrollTo({
          top: 2120,
          behavior: "smooth",
        });
        break;
      case "Sponsors":
        window.scrollTo({
          top: 3700,
          behavior: "smooth",
        });
        break;

      default:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
    }
  };

  const scrollRegister = () => {
    window.scrollTo({
      top: 5250,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="shadow-md z-50 bg-white sticky top-0 w-full p-4 px-8 flex justify-between items-center">

        {/* LOGO  */}

        <NavLink onClick={() =>goToPage("home")}>
          <h1 className="text-sky-600 text-2xl font-semibold  ">DGS 2025</h1>
        </NavLink>

        {/* Navbar links */}

        <ul className="flex text-gray-600  justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <NavLink
                onClick={() => goToPage(link)}
                className={({ isActive }) =>
                  isActive ? " hover:text-sky-600" : " hover:text-sky-600"
                }
                title={link}
                key={index}
              >
                <li>{link}</li>
              </NavLink>
            );
          })}

          {/* Register Button  */}

          <li>
            <NavLink
              onClick={scrollRegister}
              className="p-2 bg-sky-600 rounded-lg px-4 text-white"
            >
              Register Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
