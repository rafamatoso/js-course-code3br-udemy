import React from "react";
import "./styles.css";
import Header from "../Header";

export default (props) => (
  <>
    <Header {...props}></Header>
    <main className="content">Conteúdo</main>
  </>
);
