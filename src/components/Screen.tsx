import React from "react";
import "./Screen.css";

// The top section of the calculator that displays the result of the calculation
export function Screen({ value }: { value: number | string }) {
  return <div className="screen">{value}</div>;
}
