import React from "react";
import Title from "../components/Title";
import Sponsorshipcard from "../components/Sponsorshipcard";
import { RxDownload } from "react-icons/rx";

const SponsorshipPackage = () => {
  const SponsorshipDetails = [
    {
      title: "Title Sponsor",
      price: "₹3 Lakhs",
      option: [
        "Prime Exhibition Space (20x20 ft)",
        "Exclusive Branding Rights",
        "45-min Keynote Session",
        "10 VIP Passes",
        "Featured in All Marketing Materials",
      ],
      available: "1 Booths Available",
    },
    {
      title: "Gold Sponsor",
      price: "₹1.5 Lakhs",
      option: [
        "Standard Exhibition Space (10x10 ft)",
        "Premium Branding Placement",
        "20-min Speaking Slot",
        "5 VIP Passes",
        "Logo on Event Materials",
      ],
      available: "3 Booths Available",
    },
  ];

  return (
    <>
      <Title
        title={"Sponsorship Packages"}
        discription={
          "Partner with us to showcase your brand to Gujarat's digital community"
        }
      />

      <main className="pb-16">
        <section className="flex justify-center px-32 my-16 items-center gap-8 w-full">
          <Sponsorshipcard
            details={SponsorshipDetails[0]}
            bgcolor="bg-sky-600"
            bordercolor={"border-sky-600"}
            hoverbg={"hover:bg-sky-700"}
            textcolor={"text-sky-600"}
          />
          <Sponsorshipcard
            details={SponsorshipDetails[1]}
            bgcolor="bg-green-600"
            bordercolor={"border-green-600"}
            hoverbg={"hover:bg-green-700"}
            textcolor={"text-green-600"}
          />
        </section>

        <p className="text-center text-gray-600 text-base">
          Custom sponsorship packages are also available
        </p>

        <div className="grid items-center justify-center my-6">
          <button className="px-6 py-3 bg-white flex justify-center duration-300 ease-in-out hover:text-white hover:bg-sky-600 items-center gap-2 text-sky-600 border-2 border-sky-600 rounded-lg">
            Download Sponsership brochure
            <RxDownload className="h-5 w-5" />
          </button>
        </div>
      </main>
    </>
  );
};

export default SponsorshipPackage;
