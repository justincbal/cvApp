import React, { useState } from "react";
import Form from "./Form";
import Cv from "./Cv";
import "../styles/App.css";
function App() {
  // Person
  const personalObj = { firstName: "", lastName: "", email: "", tel: "" };
  const [person, updatePerson] = useState(personalObj);

  // Education
  const educationObj = [];
  const [education, updateEducation] = useState(educationObj);

  // Work
  const workObj = [];
  const [work, updateWork] = useState(workObj);

  return (
    <>
      <div className="page">
        <Form
          person={person}
          updatePerson={updatePerson}
          education={education}
          updateEducation={updateEducation}
          work={work}
          updateWork={updateWork}
        />
        <Cv personal={person} education={education} work={work}/>
        {/* {console.log(work)} */}
      </div>
    </>
  );
}
export default App;
