import React from "react";
import "../stylesheets/Screen.css";

// The top section of the calculator that displays the result of the calculation
export function Screen({ value }) {
  return <div className="screen">{value}</div>;
}
