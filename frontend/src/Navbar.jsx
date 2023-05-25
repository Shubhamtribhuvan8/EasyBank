import React from "react";
function NavBar(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
  };
  var aStyle = {
    textAlign: "start",
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={divStyle}>
        <h1 style={aStyle}>EasyBank </h1>
      </div>
    </>
  );
}

export default NavBar;
