import React from "react";

export let formReq = [];

const Require = ({ name }) => {
  const addToFilter = () => {
    formReq.push(name);
    formReq = [...new Set(formReq)];
    console.log(formReq);
  };

  return (
    <h2 className="require" onClick={addToFilter}>
      {name}
    </h2>
  );
};

export default Require;
