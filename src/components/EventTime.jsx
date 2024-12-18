import React from "react";


const EventTime = ({ details }) => {
  const { time, title, description } = details;
  return (
    <>
      <div className={`"p-3  rounded-lg hover:shadow-md shadow-sm duration-300 grid gap-1 p-8 text-left  "`}>
        <p className="font-medium text-lg text-sky-600 ">{time}</p>
        <p className="text-gray-900 text-lg">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default EventTime;
