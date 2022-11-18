import React from "react";
import Button from "./Button";

function Header(p) {
  let melek = (s) => {
    console.log(s);
  };
  return (
    <div className="header">
      <h2>ToDo List of {p.name} </h2>
      <Button text="add" color="green" clique={() => melek("add")} />
    </div>
  );
}

export default Header;
