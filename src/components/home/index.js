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
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <InputForm label={"Email"} type={"email"} onChange={handleEmail} />
      <InputForm
        label={"Password"}
        type={"password"}
        onChange={handlePassword}
      />
      <ButtonSubmit onClick={handleClick} value={"Envoyer"} />
    </div>
  );
};

export default Home;
