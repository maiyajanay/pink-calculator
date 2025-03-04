import React from "react";
import "../stylesheets/Button.css";

export function Button({ className, onClick, value }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
