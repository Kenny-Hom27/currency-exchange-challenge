import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import IndividualBalance from "./IndividualBalance";
import "./AccountBalance.css";

class AccountBalance extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.props.calculateBalance();
  }

  render() {
    const { accountBalances, totalBalance, defaultCurrency } = this.props;
    return (
      <div className="account-balance-page container">
        <div className="account-balance-title">Account Balances</div>
        <div className="account-balance-total">Total: {totalBalance} {defaultCurrency}</div>
        <div className="account-balance-currencies">
          {Object.keys(accountBalances).map(key => {
            return (
              <IndividualBalance
                key={key}
                currency={key}
                amount={accountBalances[key]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalBalance: state.account.totalBalance,
    accountBalances: state.account.accountBalances,
    defaultCurrency: state.account.defaultCurrency,
  };
};

export default connect(
  mapStateToProps,
  actions
)(AccountBalance);
