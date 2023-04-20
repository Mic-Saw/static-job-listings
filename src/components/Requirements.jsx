import React from "react";
import Require from "./Require";

const Requirements = (props) => {
  const { role, level, languages, tools, addToFilter } = props;
  const requirements = [role, level, ...tools, ...languages];

  return (
    <div className="requirements">
      {requirements.map((require, index) => (
        <Require name={require} key={index} addToFilter={addToFilter} />
      ))}
    </div>
  );
};

export default Requirements;
