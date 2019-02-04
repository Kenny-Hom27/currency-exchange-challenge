import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import BalanceForm from "./BalanceForm";

class WithdrawBalance extends Component {
  render() {
    return (
      <BalanceForm
        label="Withdraw"
        changeBalance={this.props.withdrawBalance}
      />
    );
  }
}

export default connect(
  null,
  actions
)(WithdrawBalance);
