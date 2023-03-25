import React from "react";
import New from "./New";
import Featured from "./Featured";

const Details = (props) => {
  return (
    <div className="details">
      <h2>
        {props.company}
        {props.new && <New />}
        {props.featured && <Featured />}
      </h2>
      <h1>{props.position}</h1>
      <h3>
        {props.postedAt}
        <span>&bull;</span>
        {props.contract}
        <span>&bull;</span>
        {props.location}
      </h3>
    </div>
  );
};

export default Details;
