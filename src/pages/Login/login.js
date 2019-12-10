import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/img/google.png";
import Facebook from "../../assets/img/facebook.png";
import Logo from "../../components/Logo/logo";
import "./login.scss";
import firebase from "../../services/firebase";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import banner from "../../assets/img/bg-login.png";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.menssage);
    }
  }

  return (
    <section className="container-login">
      <section className="content-login">
          <img className="banner" src={banner} alt="Banner" />

        <form onSubmit={e => e.preventDefault() && false}>
          <div className="Logo ">
            <Logo />
          </div>
          <Input
            placeholder="Email"
            icon="perm_identity"
            id="email"
            style={{ width: 250 + "px" }}
            autoFocus
            value={email}
            type="text"
            autoComplete="off"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            icon="lock"
            id="password"
            type="password"
            name="password"
            style={{ width: 250 + "px" }}
            value={password}
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={login}
            style={{width: 200 +"px", fontWeight: "bold"}}
          >Entrar</Button>
          <label className="Textlabel">Esqueceu sua senha ?</label>
          <div className="loginSocial">
            <h2 className="test placeText">Entrar com</h2>
            <div className="SocialIcon">
              <img className="icons" alt="icone do Google" src={Google}></img>
              <img
                className="icons iconFace"
                alt="icone do Facebook"
                src={Facebook}
              ></img>
            </div>
          </div>
          <label className="NewUser">
            Novo no SportFriend ?
            <Link className="NewUser cadastrar" to="/register">
              &nbsp;Escreva-se
            </Link>
          </label>
        </form>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </section>
    </section>
  );
}
