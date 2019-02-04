import React, { Component } from "react";
import AccountBalance from "../AccountBalance/AccountBalance";
import DepositBalance from "../ChangeBalance/DepositBalance";
import WithDrawBalance from "../ChangeBalance/WithdrawBalance";

class App extends Component {
  render() {
    return (
      <div>
        <AccountBalance />
        <DepositBalance />
        <WithDrawBalance />
      </div>
    );
  }
}

export default App;
