import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import addImg from "../../assets/images/Vectoradd.png";
import lockImg from "../../assets/images/Vectorlock.png";
import statImg from "../../assets/images/Vectorstat.png";
import vector from "../../assets/images/Vectorvector.png";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import NavBarHeading from "../../components/NavBarHeading/NavBarHeading";
import UserContext from "../../contexts/UserContext";
import { auth } from "../../firebase";
import "./NavBar.scss";

const NavBar = () => {
  let currentUserName;
  try {
    const { user } = useContext(UserContext);
    currentUserName = user.name;
  } catch {
    currentUserName = "";
  }

  const logout = async () => {
    await signOut(auth);
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
        <Link to="/swing-gamePlay">
          <h3>Swing game</h3>
        </Link>
        <h2>Introduction</h2>
        <Link to={"/level-select-card-container"}>
          <NavBarHeading
            headingText={"Level 1"}
            headingImg={lockImg}
            headingStyle={"nav-bar"}
          />
        </Link>

        <Link to={"/swing-gamePlay"}>
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
        <h2>{currentUserName}</h2>
        <Link to={"/avatarcreation"}>
          <NavBarHeading
            headingText={"Add Avatar"}
            headingImg={addImg}
            headingStyle={"nav-bar"}
          />
        </Link>
      </div>
      <Button
        buttonText={"Logout"}
        buttonStyle={"button-logout"}
        onClickEvent={logout}
      />
    </div>
  );
};

export default NavBar;
