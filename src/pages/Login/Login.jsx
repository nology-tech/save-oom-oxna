import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../api/userService";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import UserContext from "../../context/UserContext";
import { auth } from "../../firebase";
import "./Login.scss";

const LoginPage = () => {
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
      <div className="login">
        <Logo />
        <form className="login__form" onSubmit={login}>
          <h1 className="login__heading">Welcome!</h1>
          <TextInput
            labelText="Email"
            onChangeEvent={handleUpdateEmail}
            inputType="email"
          />
          <TextInput
            labelText="Password"
            onChangeEvent={handleUpdatePassword}
            inputType="password"
          />
          <Button
            buttonText="Log in"
            buttonStyle="button-secondary"
            type="submit"
          />
          <p className="login__bottom-text">
            Don&apos;t have an Account?{" "}
            <Link to="/registration" className="login__registration-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
