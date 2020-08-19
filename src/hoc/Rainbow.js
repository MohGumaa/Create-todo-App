import React from "react";

function Rainbow(WtappedComponent) {
  const colours = ["red", "blue", "green", "yellow", "orange", "pink"];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  const className = randomColour + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WtappedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
