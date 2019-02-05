import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navlink from "./Navlink";
import './NavBar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-items">
          <Navlink path="/addCurrency" name="Add a Currency" />
          <Navlink path="/deposit" name="Deposit Money" />
          <Navlink path="/withdraw" name="Withdraw Money" />
          <Navlink path="/transfer" name="Transfer Money" />
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
