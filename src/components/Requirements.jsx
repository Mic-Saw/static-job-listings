import React from "react";
import Require from "./Require";

const Requirements = (props) => {
  const { role, level, languages, tools } = props;
  const requirements = [role, level, ...tools, ...languages];

  return (
    <div className="requirements">
      {requirements.map((require, index) => (
        <Require name={require} key={index} />
      ))}
    </div>
  );
};

export default Requirements;
