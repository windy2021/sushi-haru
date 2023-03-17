import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary_s", "btn--outline_s"];
const SIZES = ["btn--medium_s", "btn--large_s"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : STYLES[0];

  return (
    <Link to={linkTo} className="btn--mobile_s">
      <button className={`btn_s ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    </Link>
  );
};
