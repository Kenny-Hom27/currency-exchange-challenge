import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import BalanceForm from "./BalanceForm";

class DepositBalance extends Component {
  render() {
    return (
      <BalanceForm label="Deposit" changeBalance={this.props.depositBalance} />
    );
  }
}

export default connect(
  null,
  actions
)(DepositBalance);
