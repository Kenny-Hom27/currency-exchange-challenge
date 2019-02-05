import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

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
      <div>
        Transfer Balance
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={sendAmount}
            placeholder="Send an amount"
            onChange={this.sendAmountChange}
          />
          <select value={sendType} onChange={this.sendTypeChange}>
            {currencyTypes}
          </select>
          <label>Pick an account to send to</label>
          <select value={receiveType} onChange={this.receiveTypeChange}>
            {currencyTypes}
          </select>
          <button>Transfer Balance</button>
        </form>
      </div>
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
