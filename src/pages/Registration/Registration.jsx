import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";
//authentication imports
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, setCurrentUser } from "../../api/userService";
import UserContext from "../../context/UserContext";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const isSuccess = await registerUser({
      email,
      password,
      firstName,
    });

    if (isSuccess) {
      setCurrentUser(setUser);
      navigate("/dashboard");
    } else {
      console.log("there was an error registering this user");
    }
  };

  const handleUpdateFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Layout showNavbar={false}>
      <div className="registration">
        <div className="registration__image">
          <Logo />
        </div>
        <form className="registration__container" onSubmit={handleRegister}>
          <h1 className="registration__heading">Create your account</h1>
          <p className="registration__top-text">
            This is the registration page
          </p>
          <TextInput
            className="registration__input"
            labelText="Child Name"
            onChangeEvent={handleUpdateFirstName}
            inputType="text"
          />
          <TextInput
            className="registration__input"
            labelText="Email Address"
            onChangeEvent={handleUpdateEmail}
            inputType="email"
          />
          <TextInput
            className="registration__input"
            labelText="Password"
            onChangeEvent={handleUpdatePassword}
            inputType="password"
          />
          <Button
            className="registration__button"
            buttonText="Create your account"
            buttonStyle={"button-secondary"}
            type="submit"
          />
          <p className="registration__bottom-text">
            Already have an account?{" "}
            <Link className="registration__link" to="/">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Registration;
