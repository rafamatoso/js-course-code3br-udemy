import React from "react";

import Logo from "../../components/template/Logo";
import Nav from "../../components/template/Nav";
import Home from "../../components/Home";
import Footer from "../../components/template/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./styles.css";

export default (props) => (
  <div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Home></Home>
    <Footer></Footer>
  </div>
);
