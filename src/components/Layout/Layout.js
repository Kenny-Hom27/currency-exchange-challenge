import React, { Component } from "react";
import AccountBalance from "../AccountBalance/AccountBalance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import NavBar from "../NavBar/NavBar";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <AccountBalance />
        <hr/>
        {this.props.children}
        <hr/>
        <TransactionHistory />
      </div>
    );
  }
}

export default Layout;
