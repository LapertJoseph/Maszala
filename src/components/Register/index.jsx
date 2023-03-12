import "./style.css";
import React, { useState } from "react";
import FieldText from "../Ui/TextField";
import Checkboxes from "../Ui/CheckBox";
import BasicButtons from "../Ui/Button";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
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
        <h2>Register</h2>
        <p>Already have an account ? Log in</p>
        <FieldText label={"Name"} onChange={handleChangeName} type={"text"} />
        <FieldText
          label={"Email"}
          onChange={handleChangeEmail}
          type={"email"}
        />
        <FieldText
          label={"Password"}
          onChange={handleChangePassword}
          type={"password"}
        />
        <Checkboxes label={"I have read the Terms and Conditions"} />
        <BasicButtons label={"Register"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default FormRegister;
