import React from "react";
import Apod from "../APOD.js";

const Text = (props) => {
  const { copyright, date, description } = props.data;
  return (
    <section>
      <h2> {props.data.copyright} </h2>
      <h3> {props.data.date}</h3>
      <p>{props.data.description}</p>
    </section>
  );
};
export default Text;
