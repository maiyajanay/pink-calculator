import React from "react";
import "..stylesheets/Button.css";

interface ButtonProps {
  className: string;
  onClick: () => void;
  value: string;
}

export function Button({ className, onClick, value }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
