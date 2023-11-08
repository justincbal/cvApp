import React, { useState } from "react";

function Work(props) {
  const arr = { company: "", position: "", years: "" };

  const clear = () => {
    const inputs = document.querySelectorAll(".workInput");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  const handleClick = () => {
    clear();
    const newArr = [...props.work, arr];
    props.updateWork(newArr);
  };

  return (
    <>
      <fieldset className="field">
        <legend>Work</legend>
        <div className="item">
          <label htmlFor="">Company: </label>
          <input
            className="workInput"
            type="text"
            placeholder="McDonalds"
            onChange={(e) => (arr.company = e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="">Position: </label>
          <input
            className="workInput"
            type="text"
            placeholder="Crew"
            onChange={(e) => (arr.position = e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="">Years worked: </label>
          <input
            className="workInput"
            type="text"
            placeholder="2010-2025 2010-pres"
            onChange={(e) => (arr.years = e.target.value)}
          />
        </div>
        <div className="item">
          <button type="button" onClick={handleClick}>Add</button>
          <button>Reset</button>
        </div>
      </fieldset>
    </>
  );
}

export default Work;
