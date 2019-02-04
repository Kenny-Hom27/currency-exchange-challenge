import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./AccountBalance.css";

class AccountBalance extends Component {
  render() {
    const { accountBalances } = this.props;
    return (
      <div className="account-balance container">
        <div className="account-balance-title">Account Balances</div>
        <div className="account-balance-currencies">
          {Object.keys(accountBalances).map(key => {
            return (
              <div key={key} className="account-balance-currency">
                {key} {accountBalances[key]}
              </div>
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
    accountBalances: state.account.accountBalances
  };
};

export default connect(mapStateToProps)(AccountBalance);
