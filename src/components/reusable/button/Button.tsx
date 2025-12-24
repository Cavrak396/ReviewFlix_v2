import type { ButtonType } from "./types/buttonTypes";
import "./style/button.css";

function Button({
  buttonClass,
  modifier,
  children,
  onClick,
}: ButtonType & { modifier?: string }) {
  const className = `button ${buttonClass ? `${buttonClass}__button` : ""}${
    modifier ? ` ${buttonClass}__button--${modifier}` : ""
  }`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
