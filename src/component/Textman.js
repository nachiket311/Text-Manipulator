import React, { useState } from "react";

export default function Textman(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const cleartext = () => {
    let newText = "";
    setText(newText);
  };

  const handlecopy = () => {
    let text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCapitalizeCaseClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="txt"
        style={{ color: props.mode === "darkmode" ? "white" : "black" }}
      >
        <div className="textmain">
          <div className="textarea">
            <h1 className="texttitle">Enter text in the box you want</h1>
            <textarea
              name="textbox"
              value={text}
              id="mytext"
              onChange={handleonchange}
              style={{
                color: props.mode === "darkmode" ? "white" : "black",
                backgroundColor:
                  props.mode === "darkmode" ? "#192d69" : "#c7ced9",
              }}
              cols={100}
              rows={10}
            />
            <div className="buttons">
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={handleUpClick}
              >
                Convert to upper case
              </button>
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={handleLoClick}
              >
                Convert to lower case
              </button>
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={cleartext}
              >
                Clear Text
              </button>
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={handlecopy}
              >
                Copy Text
              </button>
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={handleextraspaces}
              >
                Remove Extra Spaces
              </button>
              <button
                className={`btn ${props.toggleMode} ${props.mode}`}
                onClick={handleCapitalizeCaseClick}
              >
                Capitalize Text
              </button>
            </div>
          </div>
        </div>
        <div className="txtsummain">
          <div className="txtsum">
            <h2>your Text Summery</h2>
            <p>
              {" "}
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} character in your text
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes to read
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
