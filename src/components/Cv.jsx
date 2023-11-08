import React, { useState } from "react";
import "../styles/Cv.css";

function Cv(props) {
  const email = props.personal.email !== "";
  const tel = props.personal.tel !== "";
  let render;
  if (email && tel) {
    render = (
      <h2>
        <span className="email">{props.personal.email}</span> |{" "}
        {props.personal.tel}
      </h2>
    );
  } else if (tel) {
    render = <h2>{props.personal.tel}</h2>;
  } else if (email) {
    render = (
      <h2>
        <span className="email">{props.personal.email}</span>
      </h2>
    );
  }

  // Education render
  const ed = props.education;
  const eduRender = ed.map((e) => {
    return (
      <div className="eduItem">
        <h5 className="program">{e.program}</h5>
        <p className="years">{e.years}</p>
        <p className="school">{e.school}</p>
      </div>
    );
  });

  // Work render
  const wk = props.work;
  const wkRender = wk.map((w) => {
    return(
      <div className="workItem">
        <h5 className="company">{w.company}</h5>
        <p className="years">{w.years}</p>
        <p className="position">{w.position}</p>
      </div>
    )
  })

  return (
    <>
      <div className="sheet">
        <h2 className="name">
          {props.personal.firstName} {props.personal.lastName}
        </h2>
        <div className="otherPersonal">{render}</div>

        <div className="education">
          {props.education.length !== 0 && <h3>Education</h3>}
          {eduRender}
          {/* {console.log(props.education)} */}
          {/* <div className="eduItem">
          <h5 className="program">Computer Programming</h5>
          <p className="years">2010-2015</p>
          <p className="school">Ryerson University</p>
          
        </div> */}
        </div>

        <div className="work">
          {props.work.length !== 0 && <h3>Work experience</h3>}
          {wkRender}
        </div>
      </div>
    </>
  );
}

export default Cv;
