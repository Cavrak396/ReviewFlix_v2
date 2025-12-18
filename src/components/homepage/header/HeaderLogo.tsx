import Logo from "../../../assets/images/header/logo.png";

function HeaderLogo() {
  return (
    <div className="header__logo">
      <img src={Logo} className="header__logo-img" alt="application logo" />
    </div>
  );
}

export default HeaderLogo;