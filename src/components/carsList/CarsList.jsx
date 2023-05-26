import "./carsList.style.css";
import { cars } from "./carsData";
import Card from "../card/Card";

import React from "react";

function CarsList() {
  const showCarInfo = cars.map((el, index) => {
    return <Card cardData={el} key={index} />;
  });
  return <div className="container-main">{showCarInfo}</div>;
}

export default CarsList;
