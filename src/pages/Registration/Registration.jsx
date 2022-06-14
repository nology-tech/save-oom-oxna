import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";
//authentication imports
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { auth, createUser } from "../../firebase";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const userContext = useContext(UserContext);
  const [user, setUser] = useState({});
  const [showValue, setShowValue] = useState("");
  let navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    userContext.setUser(user);
  });

  const register = async (e) => {
    e.preventDefault();
    console.log("working");
    console.log(showValue);
    console.log(auth, firstName, registerEmail, registerPassword);
    navigate("/avatar-creation");
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    await createUser(user.user.uid, "parentName", firstName);
    setUser({
      parentName: firstName,
      userId: user.user.uid,
    });
  };

  return (
    <Layout showNavbar={false}>
      <div className="registration">
        <div className="registration__image">
          <Logo />
        </div>
        <form className="registration__container" onSubmit={register}>
          <h1 className="registration__heading">Create your account</h1>
          <p className="registration__top-text">
            This is the registration page
          </p>
          <TextInput
            className="registration__input"
            labelText={"Child Name"}
            onChangeEvent={(e) => {
              setShowValue(e.target.value);
              setFirstName(e.target.value);
            }}
            inputType="text"
          />
          <TextInput
            className="registration__input"
            labelText={"Email Address"}
            onChangeEvent={(e) => {
              setRegisterEmail(e.target.value);
            }}
            inputType="email"
          />
          <TextInput
            className="registration__input"
            labelText={"Password"}
            onChangeEvent={(e) => {
              setRegisterPassword(e.target.value);
            }}
            inputType="password"
          />

          <Button
            className="registration__button"
            buttonText={"Create your account"}
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
