import "./styles/title.css";
import type { TitleTypes } from "./types/title";

function Title({ className, children }: TitleTypes) {
  return <h2 className={`${className} title`}>{children}</h2>;
}

export default Title;
