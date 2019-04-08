import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

export default class MainLayout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home}/>
        <Footer />
      </Router>
    );
  }
}
