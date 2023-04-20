import React from "react";
import FilterElement from "./FilterElement";

let filterArr = [];

const Require = ({ name }) => {
  const addToFilter = () => {
    if (filterArr.some((a) => a === name)) return;

    const filter = document.querySelector(".filter");

    filter.innerHTML += `<div class="require__element">
                          <h2 class="require__element--name">${name}</h2>
                          <div class="require__element--delete">&#215</div>
                        </div>`;
    console.log(`${name}`);
    filterArr = [...filterArr, `${name}`];
    console.log(filter);

    const filterElements = document.querySelectorAll(".require__element");
    filterElements.forEach((filterElement) =>
      filterElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("require__element--delete")) {
          filter.innerHTML = "";

          const name =
            e.target.parentElement.firstChild.nextElementSibling.innerHTML;
          console.log(name);
          filterArr = filterArr.filter((el) => el !== name);
          console.log(filterArr);
          for (let el of filterArr) {
            filter.innerHTML += `<div class="require__element">
            <h2 class="require__element--name">${el}</h2>
            <div class="require__element--delete">&#215</div>
          </div>`;
          }
        }
      })
    );
  };

  return (
    <button className="require" onClick={addToFilter}>
      {name}
    </button>
  );
};

export default Require;
