import { useContext } from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../../api/userService";
import lockImg from "../../assets/images/Vectorlock.png";
import statImg from "../../assets/images/Vectorstat.png";
import vector from "../../assets/images/Vectorvector.png";
import Logo from "../../components/Logo/Logo";
import NavBarHeading from "../../components/NavBarHeading/NavBarHeading";
import UserContext from "../../context/UserContext";
import "./NavBar.scss";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    userLogout(setUser);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar__section">
        <Logo />
        <NavBarHeading
          headingText={"Phonics stages"}
          headingImg={vector}
          headingStyle={"nav-bar"}
        />
        <Link to="/swing-game">
          <h3>Swing game</h3>
        </Link>
        <h2>Introduction</h2>
        <Link to={"/level-select"}>
          <NavBarHeading
            headingText={"Level 1"}
            headingImg={lockImg}
            headingStyle={"nav-bar"}
          />
        </Link>
        <Link to={"/swing-game"}>
          <NavBarHeading
            headingText={"Game Play"}
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
      <Link className="button-logout" onClick={handleLogout} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default NavBar;
