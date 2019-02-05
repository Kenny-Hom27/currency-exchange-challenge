import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import "./TransferBalance.css";

class TransferBalance extends Component {
  state = {
    sendAmount: "",
    sendType: "USD",
    receiveType: "EUR"
  };

  sendAmountChange = e => {
    this.setState({
      sendAmount: e.target.value
    });
  };

  sendTypeChange = e => {
    this.setState({
      sendType: e.target.value
    });
  };

  receiveTypeChange = e => {
    this.setState({
      receiveType: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.transferBalance(this.state);

    this.setState({
      sendAmount: "",
      receiveAmount: ""
    });
  };

  render() {
    const { accountBalances } = this.props;
    const { sendAmount, sendType, receiveType } = this.state;

    const currencyTypes = Object.keys(accountBalances).map(type => {
      return (
        <option key={type} value={type}>
          {type}
        </option>
      );
    });
    return (
      <Layout>
        <div className="transfer-balance">
          <div className="transfer-balance-title">Transfer Balance</div>

          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={sendAmount}
              placeholder="Send an amount"
              onChange={this.sendAmountChange}
              className="form-control col-md-5"
            />
            <select
              value={sendType}
              onChange={this.sendTypeChange}
              className="form-control col-md-5"
            >
              {currencyTypes}
            </select>
            <div>
              <div className="receive-label">Pick an account to send to</div>
              <select
                value={receiveType}
                onChange={this.receiveTypeChange}
                className="form-control col-md-5"
              >
                {currencyTypes}
              </select>
            </div>
            <button className="btn btn-success">Transfer Balance</button>
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
)(TransferBalance);
