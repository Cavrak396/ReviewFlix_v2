import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterNavigation from "./nav/FooterNavigation";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <FooterLogo />
      <FooterNavigation />
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
