import type { ButtonType } from "./types/buttonTypes";
import "./style/button.css";

function Button({ buttonClass, children, onClick }: ButtonType) {
  return (
    <button
      type="button"
      className={`button ${buttonClass ? `${buttonClass}__button` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
