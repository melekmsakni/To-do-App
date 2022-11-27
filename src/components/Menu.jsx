import React, { useState } from "react";

export const Menu = ({ setName, name }) => {
  const [field, setField] = useState("");
  const checkName = () => {
    if (field === "") alert("please enter the name");
    else setName(field);
  };
  return (
    <div className={`menu  ${name !== "" ? "hide" : ""}`}>
      <div className="form-input">
        <label>Please Enter Your todo list Name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter a todo list name"
          onChange={(e) => setField(e.target.value)}
        />
        <div className="toLeft">
          <button onClick={() => checkName()}>Next</button>
        </div>
      </div>
    </div>
  );
};
