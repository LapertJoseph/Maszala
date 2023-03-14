import "./style.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import FieldText from "../../ui/textfield";
import Checkboxes from "../../ui/checkbox";
import BasicButtons from "../../ui/button";

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
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="container-page">
      <div className="container-left">
        <h1 className="background-title">Welcome to Mazsala Kitchen App, Best place to eat with family</h1>
        <p className="txt-register">
        A professional gastronomy kitchen that comes with tastes.
        </p>
        <p className="txt2-register">Join 6,000+ subscriber</p>
      </div>
      <div className="container-right">
        <h2>Register</h2>
        <p>Already have an account ?  &rarr; <Link to="/login">Log in</Link></p>
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
        <BasicButtons label={"Register"} onClick={handleSubmitRegister} />
      </div>
    </div>
  );
};

export default FormRegister;
