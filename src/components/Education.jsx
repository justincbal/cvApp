import React, { useState } from "react";

function Education(props) {
  const arr = { program: "", school: "", years: "" };
  
  // Clear input fields
  const clear = () => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  const handleSubmit = () => {
    clear();
    const newArr = [...props.education, arr];
    props.updateEducation(newArr);
  };

  return (
    <>
      <fieldset className="field">
        <legend>Education</legend>

        <div className="item">
          <label htmlFor="">Program: </label>
          <input
          placeholder="Computer Science"
            className="input"
            type="text"
            id="program"
            onChange={(e) => {
              arr.program = e.target.value;
            }}
          />
        </div>
        <div className="item">
          <label htmlFor="">School: </label>
          <input
            placeholder="Ryerson"
            className="input"
            type="text"
            onChange={(e) => {
              arr.school = e.target.value;
            }}
          />
        </div>
        <div className="item">
          <label htmlFor="">Years attended: </label>
          <input
            placeholder="2010-pres"
            className="input"
            type="text"
            onChange={(e) => {
              arr.years = e.target.value;
            }}
          />
        </div>
        <div className="item">
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
          <button>Reset</button>
        </div>
      </fieldset>
    </>
  );
}

export default Education;
