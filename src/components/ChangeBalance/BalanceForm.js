import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import "./BalanceForm.css";

class BalanceForm extends Component {
  state = {
    amount: "",
    currencyType: "USD"
  };

  amountChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  chooseCurrency = e => {
    this.setState({
      currencyType: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.changeBalance(this.state);

    this.setState({
      amount: ""
    });
  };

  render() {
    const { label, accountBalances } = this.props;
    return (
      <Layout>
        <div className="balance-form">
          <div className="balance-form-title">{label} Balance</div>
          <form onSubmit={this.onSubmit} className="form-group">
            <input
              type="text"
              value={this.state.amount}
              placeholder="Enter an amount"
              onChange={this.amountChange}
              className="form-control col-md-2"
            />
            <select
              value={this.state.value}
              onChange={this.chooseCurrency}
              className="form-control col-md-2"
            >
              {Object.keys(accountBalances).map(type => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-primary">{label}</button>
          </form>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    accountBalances: state.account.accountBalances
  };
};

export default connect(
  mapStateToProps,
  actions
)(BalanceForm);
