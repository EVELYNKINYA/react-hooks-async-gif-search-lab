import React from "react";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };
 

  console.log("Component is rendering with color:", color);
  console.log("Component is rendering with title:", title);

  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
