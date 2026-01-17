import { Link } from "react-router-dom";
import type { FooterLinksProps } from "../types/footerTypes";

function FooterNavigationItem({ item }: FooterLinksProps) {
  return (
    <li className="footer__navigation-item">
      <Link className="footer__navigation-link" to={item.path}>
        {item.linkText}
      </Link>
    </li>
  );
}

export default FooterNavigationItem;
