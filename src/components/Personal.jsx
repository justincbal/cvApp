import React, { useState } from "react";
import Cv from "./Cv";

function Personal(props) {
  return (
    <>
      <fieldset className="field">
        <legend>Personal</legend>

        <div className="item">
          <label htmlFor="">First name: </label>
          <input
            type="text"
            placeholder="John"
            onChange={(e) =>
              props.updatePerson({ ...props.person, firstName: e.target.value })
            }
          />
        </div>

        <div className="item">
          <label htmlFor="">Last name: </label>
          <input
            type="text"
            placeholder="Doe"
            onChange={(e) =>
              props.updatePerson({ ...props.person, lastName: e.target.value })
            }
          />
        </div>
        <div className="item">
          <label htmlFor="">Email: </label>
          <input
            type="email"
            placeholder="JohnDoe@hotmail.com"
            onChange={(e) =>
              props.updatePerson({ ...props.person, email: e.target.value })
            }
          />
        </div>
        <div className="item">
          <label htmlFor="">Phone: </label>
          <input
            type="tel"
            placeholder="0213339203"
            onChange={(e) =>
              props.updatePerson({ ...props.person, tel: e.target.value })
            }
          />
        </div>
      </fieldset>
    </>
  );
}

export default Personal;
