import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../../api/userService";
import addImg from "../../assets/images/Vectoradd.png";
import lockImg from "../../assets/images/Vectorlock.png";
import statImg from "../../assets/images/Vectorstat.png";
import vector from "../../assets/images/Vectorvector.png";
import Logo from "../../components/Logo/Logo";
import NavBarHeading from "../../components/NavBarHeading/NavBarHeading";
import UserContext from "../../contexts/UserContext";
import "./NavBar.scss";

const NavBar = () => {
  const [userName, setUserName] = useState("Name not found");

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.user?.name && setUserName(userContext.user.name);
  }, [userContext.user]);

  const logout = async () => {
    await userLogout(userContext);
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
        <h2>{userName}</h2>
        <Link to={"/avatar-creation"}>
          <NavBarHeading
            headingText={"Add Avatar"}
            headingImg={addImg}
            headingStyle={"nav-bar"}
          />
        </Link>
      </div>
      <Link className="button-logout" onClick={logout} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default NavBar;
