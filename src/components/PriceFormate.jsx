import React from "react";

const PriceFormate = ({ price }) => {
  const formated = new Intl.NumberFormat("en-IN").format(price);
  return formated;
};

export default PriceFormate;
