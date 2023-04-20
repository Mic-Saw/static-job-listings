import { useState } from "react";

import Filter from "./components/Filter";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

import data from "./../data.json";

let f = [];

function App() {
  const [jobs, setJobs] = useState(data);
  console.log(jobs);

  const addToFilter = (id) => {
    console.log("ok");
  };

  return (
    <div className="App">
      <Header />
      <Filter />
      <Jobs />
    </div>
  );
}

export default App;
