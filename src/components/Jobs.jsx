import React, { useState } from "react";
import Job from "./Job";
import data from "../../data.json";

const Jobs = (props) => {
  const [jobs, setJobs] = useState(data);

  return (
    <div className="jobs">
      {jobs.map((job) => (
        <Job
          key={job.id}
          company={job.company}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          logo={job.logo}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
          new={job.new}
          featured={job.featured}
        />
      ))}
      <div className="jobs-margin"></div>
    </div>
  );
};

export default Jobs;
