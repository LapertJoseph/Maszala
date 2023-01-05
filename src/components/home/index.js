import React, { useState } from "react";
import InputForm from "../login";
import ButtonSubmit from "../button";
import "./styles.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };
  const handleClick = () => {
    console.log(email, password);
  };

  return (
      <div className="background-image">
        <h1>Welcome</h1>
        <div className="container-form">
        <InputForm
          label={"Email"}
          type={"email"}
          onChange={handleEmail}
          color={"warning"}
          fullWidth
        />
        <InputForm
          label={"Password"}
          type={"password"}
          onChange={handlePassword}
          color={"warning"}
          fullWidth
        />
        <ButtonSubmit onClick={handleClick} value={"Envoyer"} />
        </div>
      </div>
  );
};

export default Home;
