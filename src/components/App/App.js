import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AccountBalance from "../AccountBalance/AccountBalance";
import AddCurrency from "../AddCurrency/AddCurrency";
import DepositBalance from "../ChangeBalance/DepositBalance";
import WithDrawBalance from "../ChangeBalance/WithdrawBalance";
import TransferBalance from "../TransferBalance/TransferBalance";

class App extends Component {
  async componentDidMount () {
    await this.props.fetchRates(this.props.defaultCurrency)
    this.props.calculateBalance()
  }
  
  render() {
    return (
      <div className="container">
        <AccountBalance />
        <AddCurrency />
        <DepositBalance />
        <WithDrawBalance />
        <TransferBalance />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultCurrency: state.account.defaultCurrency,
    exchangeRates: state.account.exchangeRates,
  };
};

export default connect(mapStateToProps, actions)(App);
