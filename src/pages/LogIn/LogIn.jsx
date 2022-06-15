import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";
//authentication imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { setCurrentUser } from "../../api/userService";
import UserContext from "../../context/UserContext";
import { auth } from "../../firebase";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      // sign in with firebase
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

      // update user context with logged in user
      setCurrentUser(userContext.setUser);

      //navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error attempting to authenticate user", error.message);
    }
  };

  const handleUpdateEmail = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setLoginPassword(event.target.value);
  };

  return (
    <Layout showNavbar={false}>
      <div className="log-in">
        <div className="log-in__image">
          <Logo />
        </div>
        <form className="log-in__container" onSubmit={login}>
          <h1 className="log-in__heading">Welcome!</h1>
          <p className="log-in__top-text">This is the log in page</p>
          <TextInput
            className="log-in__input"
            labelText={"Email"}
            onChangeEvent={handleUpdateEmail}
            inputType="email"
          />
          <TextInput
            className="log-in__input"
            labelText={"Password"}
            onChangeEvent={handleUpdatePassword}
            inputType="password"
          />
          <Button
            className="log-in__button"
            buttonText={"Log in"}
            buttonStyle={"button-secondary"}
            type="submit"
          />
          <p className="log-in__bottom-text">
            Don&apos;t have an Account?{" "}
            <Link to="/registration" className="log-in__registration-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default LogIn;
