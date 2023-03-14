import "./style.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FieldText from "../../ui/textfield";
import Checkboxes from "../../ui/checkbox";
import BasicButtons from "../../ui/button";
import Xhttprequest from "../../utils/xhttprequest";

const FormRegister = () => {
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [check, setChecked] = useState(false);

  // console.log(check , "<==== ");

  const handleChangeName = (e) => {
    setLastname(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPasswordHash(e.target.value);
  };
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await Xhttprequest.post("http://localhost:8000/user/users", {lastName, email, passwordHash})
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    email !== "" && passwordHash !== "" && lastName !== "" && check === true
      ? setDisabled(false)
      : setDisabled(true);
  }, [email, passwordHash, lastName, check]);
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
        <h2>Register</h2>
        <p>
          Already have an account ? &rarr; <Link to="/login">Log in</Link>
        </p>{" "}
        <br />
        <FieldText
          label={"Last name"}
          onChange={handleChangeName}
          type={"text"}
        />{" "}
        <br />
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
        />{" "}
        <br />
        <Checkboxes
          label={"I have read the Terms and Conditions"}
          checked={check}
          onChange={handleChecked}
        />{" "}
        <br />
        <BasicButtons
          label={"Register"}
          onClick={handleSubmitRegister}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default FormRegister;
