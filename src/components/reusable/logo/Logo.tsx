import LogoImg from "../../../assets/images/reusable/logo.png";
import type { LogoType } from "./types/LogoTypes";

function Logo({ className, alt }: LogoType) {
  return <img src={LogoImg} className={className} alt={alt} />;
}

export default Logo;
