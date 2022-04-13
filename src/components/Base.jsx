import React from "react";
import Card from "./Card";
import data from "../data";

const Base = () => {
  let ds = data.map((e) => {
    return <Card {...e}></Card>;
  });

  return <div className="base">{ds}</div>;
};

export default Base;
