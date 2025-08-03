import React from "react";

export default function About(props) {
  return (
    <div className="aboutus">
      <div
        className="abt"
        style={{
          borderColor: props.mode === "darkmode" ? "white" : "black",
          backgroundColor: props.mode === "darkmode" ? "#192d69" : "#c7ced9",
        }}
      >
        <div className="hedingabout">
          <h1 style={{ color: props.mode === "darkmode" ? "white" : "black" }}>
            About Us
          </h1>
        </div>
        <div className="headingcontent">
          <p style={{ color: props.mode === "darkmode" ? "white" : "black" }}>
            we give you the servise to convert your text to uppercase to
            lowercase ,lowercase to uppercase and many othermanipulation with
            your text
          </p>
        </div>
      </div>
    </div>
  );
}
