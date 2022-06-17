import { Link } from "react-router-dom";
import "./NavbarLink.scss";

const NavbarLink = ({ text, to }) => (
  <Link className="navbar-link" to={to}>
    {text}
  </Link>
);

export default NavbarLink;
