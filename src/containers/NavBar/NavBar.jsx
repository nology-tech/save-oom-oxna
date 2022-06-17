import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../api/userService";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import NavbarLink from "../../components/NavbarLink/NavbarLink";
import UserContext from "../../context/UserContext";
import "./NavBar.scss";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout(setUser);
    navigate("/login");
  };

  return (
    <nav className="nav-bar">
      <div>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <NavbarLink text={"Swing Game"} to="/swing-game" />
        <NavbarLink text={"Dashboard"} to="/dashboard" />
        <NavbarLink text={"Stats"} to="stats-page" />
        <h2>{user.name}</h2>
      </div>
      <Button onClick={handleLogout} label="Logout" isSecondary />
    </nav>
  );
};

export default NavBar;
