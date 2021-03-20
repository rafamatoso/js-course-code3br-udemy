import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "../../components/template/Logo";
import Nav from "../../components/template/Nav";
import Footer from "../../components/template/Footer";
import Routes from "../../routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./styles.css";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  </BrowserRouter>
);
