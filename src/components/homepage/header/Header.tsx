import HeaderLogo from "./HeaderLogo";
import HeaderUserTools from "./usertools/HeaderUserTools";
import "./styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="header__line">
          <HeaderLogo />
          <HeaderUserTools />
        </div>
      </div>
    </header>
  );
}

export default Header;
