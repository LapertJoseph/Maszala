import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../ui/textfield";
import ButtonSubmit from "../../ui/button";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwordHash, setPassword] = useState("");
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };
  const handleLogin = async () => {
    try {
      const result = await axios.post('http://localhost:8000/api/auth', {email, passwordHash});
      console.log("This is the turboConsoleLog ~ file: index.js:29 ~ handleLogin ~ result.data.data", result);
      setUser(result);
    } catch (error) {
      console.log(error.message);
      setMessage("Email et/ou Password invalide");
    }
    console.log(user);
  };

  useEffect(() => {
    if(user){
      navigate('/layout');
    }
  })

  return (
      <div className="background-image">
        <h1>Welcome</h1>
        <div className="container-form">
        <InputForm
          label={"Email"}
          type={"email"}
          onChange={handleEmail}
          color={"error"}
          autoComplete='true'
          variant={'standard'}
          fullWidth
        />
        <InputForm
          label={"Password"}
          type={"password"}
          onChange={handlePassword}
          color={"error"}
          autoComplete='true'
          variant={'standard'}
          fullWidth
        />
        <ButtonSubmit onClick={handleLogin} value={"Envoyer"} />
        {message && <p>{message}</p>}
        </div>
      </div>
  );
};

export default Home;
