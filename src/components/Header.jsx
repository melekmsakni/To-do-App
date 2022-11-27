import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
function Header(p) {
  return (
    <div className="header">
      <h2>ToDo List of {p.name} </h2>
      <Button
        text="add"
        color="green"
        clique={p.showTasks}
        showAddTask={p.showAddTask}
      />
    </div>
  );
}
Button.defaultProps = {
  name: "none",
};
export default Header;
