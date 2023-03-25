import React from "react";
import Logo from "./Logo";
import Details from "./Details";
import Requirements from "./Requirements";

const Job = (props) => {
  return (
    <div className="job">
      <Logo {...props} />
      <Details {...props} />
      <Requirements {...props} />
    </div>
  );
};

export default Job;