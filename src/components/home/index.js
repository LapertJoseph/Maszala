import React, { useState } from "react";
import InputForm from "../textfield";
import ButtonSubmit from "../button";
import "./styles.css";
import axios from "axios";

const Home = () => {
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
      setUser(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
    if(user){
      setMessage("Vous êtes connecté");
      setTimeout(() => {
        setMessage('');
      }, 5000)
    }else {
      setMessage("Email et/ou Password invalide");
      setTimeout(() => {
        setMessage('');
      }, 5000)
    }
    console.log(user);
  };

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
