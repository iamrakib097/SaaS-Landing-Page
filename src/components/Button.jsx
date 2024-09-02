import React from "react";

const Button = ({ wide = false, type, text = "Your Button" }) => {
  return (
    <button
      className={`btn ${
        type === "text"
          ? "btn-text"
          : type === "inverted"
          ? "btn-inverted"
          : "btn-primary"
      } ${wide ? "px-10" : ""}`}
    >
      {text}
      {type === "text" ? " →" : ""}
    </button>
  );
};

export default Button;
