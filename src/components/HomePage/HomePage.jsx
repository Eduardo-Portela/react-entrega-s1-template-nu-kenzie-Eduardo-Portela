import React from "react";
import logo from "../../assets/img/nu-kenzie-home.png";
import homeImg from "../../assets/img/illustration.svg";
import "./index.css";

export const HomePage = ({ setNavPage, children }) => {
  return (
    <div className="body">
      <div className="div-cover">
        <div className="intro">
          <img src={logo} alt="Logo nu kenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          {children}
        </div>
        <div className="img-intro">
          <img src={homeImg} alt="imagen home" />
        </div>
      </div>
    </div>
  );
};
