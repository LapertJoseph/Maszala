import React, { useState, useEffect } from "react";
import { useAuth } from "../../context";
import FieldText from "../../ui/textfield";
import BasicButtons from "../../ui/button";
// import axios from "axios";

import "../register/style.css"

const Login = () => {
  
  const { login } = useAuth();

  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleChangePassword = (e) => {
    setPasswordHash(e.target.value);
    console.log(passwordHash);
  };

  const handleSubmit = async () => {
    try {
      // const result = await axios.post("http://localhost:8000/user/auth", {email, passwordHash});
      await login({email ,passwordHash});
      console.log(email, passwordHash);
    } catch (error) {
      console.log(error);
    }
  };

  // ternary operation to check all informations input
  useEffect(() => {
    (email !== "") && (passwordHash !== "") ? setDisabled(false) : setDisabled(true);
  }, [email, passwordHash]);

  return (
    <div className="container-page">
      <div className="container-left">
        <h1 className="background-title">
          Welcome to Mazsala Kitchen App, Best place to eat with family
        </h1>
        <p className="txt-register">
          A professional gastronomy kitchen that comes with tastes.
        </p>
        <p className="txt2-register">Join 6,000+ subscriber</p>
      </div>
      <div className="container-right">
        <h2>Log in</h2> <br />
        <p>Don't have an account ? Register</p> <br />
        <FieldText
          label={"Email"}
          onChange={handleChangeEmail}
          type={"email"}
        />
        <br />
        <FieldText
          label={"Password"}
          onChange={handleChangePassword}
          type={"password"}
        />
        <br />
        <BasicButtons label={"submit"} onClick={handleSubmit} disabled={disabled}/>
      </div>
    </div>
  );
};

export default Login;
