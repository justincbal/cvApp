import React, { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import "../styles/Form.css";


function Form(props) {
  return (
    <>
      <form action="" className="form">
        <Personal person={props.person} updatePerson={props.updatePerson} />
        <Education
          education={props.education}
          updateEducation={props.updateEducation}
        />
        <Work work={props.work} updateWork={props.updateWork} />
      </form>
    </>
  );
}

export default Form;
