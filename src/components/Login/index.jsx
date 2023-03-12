import "../Register/style.css";
import React, { useState } from "react";
import FieldText from "../Ui/TextField";
import BasicButtons from "../Ui/Button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwordHash, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:8000/user/auth', {email, passwordHash});
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-page">
      <div className="container-left">
        <h1 className="background-title">Welcome to Devias Kit PRO</h1>
        <p className="txt-register">
          A professional kit that comes with ready-to-use MUI components
          developed with one common goal in mind, help you build faster &
          beautiful applications.
        </p>
        <p className="txt2-register">Join 6,000+ forward-thinking companies</p>
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
        <BasicButtons label={"Submit"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
