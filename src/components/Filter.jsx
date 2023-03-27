import React, { useEffect, useState } from "react";
import { formReq } from "./Require";

const Filter = () => {
  const [fReq, setFReq] = useState(formReq);
  return (
    <div className="filter">
      {fReq.map((f, i) => (
        <p key={i}>{f}</p>
      ))}
    </div>
  );
};

export default Filter;
