import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../api/userService";
import lockImg from "../../assets/images/Vectorlock.png";
import statImg from "../../assets/images/Vectorstat.png";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import NavBarHeading from "../../components/NavBarHeading/NavBarHeading";
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
      <div className="nav-bar__section">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <Link to={"/swing-game"}>
          <NavBarHeading
            headingText={"Swing Game"}
            headingImg={lockImg}
            headingStyle={"nav-bar"}
          />
        </Link>
        <Link to={"/dashboard"}>
          <NavBarHeading
            headingText={"Dashboard"}
            headingImg={lockImg}
            headingStyle={"nav-bar"}
          />
        </Link>
        <Link to={"/stats-page"}>
          <NavBarHeading
            headingText={"Stats"}
            headingImg={statImg}
            headingStyle={"nav-bar"}
          />
        </Link>
        <h2>{user.name}</h2>
      </div>
      <Button onClick={handleLogout} label="Logout" isSecondary />
    </nav>
  );
};

export default NavBar;
