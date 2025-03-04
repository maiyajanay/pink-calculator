import React from "react";
import "../stylesheets/ButtonBox.css";

// Similar to Wrapper, holds children component. In this case, it holds the Button component.
export function ButtonBox({ children }) {
  return <div className="button-box">{children}</div>;
}
