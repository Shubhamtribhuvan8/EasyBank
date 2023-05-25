import React from "react";
function NavBar(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
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
        <img
          src="https://images.unsplash.com/photo-1639603683079-7398c604497a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFua2luZyUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          style={{ objectFit: "cover", width: "72px", height: "48px" }}
        />
      </div>
    </>
  );
}

export default NavBar;
