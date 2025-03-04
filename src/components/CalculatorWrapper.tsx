import React from "react";
import "..stylesheets/CalculatorWrapper.css";

// The frame that holds the components of the calculator
export function CalculatorWrapper({ children }: { children: any }) {
  return <div className="calculator-wrapper">{children}</div>;
}
