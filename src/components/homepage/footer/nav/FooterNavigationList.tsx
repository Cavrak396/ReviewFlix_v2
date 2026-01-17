import { footerLinks } from "../utils/footerUtils";
import FooterNavigationItem from "./FooterNavigationItem";

function FooterNavigationList() {
  return (
    <ul className="footer__navigation-list">
      {footerLinks.map((item) => (
        <FooterNavigationItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default FooterNavigationList;
