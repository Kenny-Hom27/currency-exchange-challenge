import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

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
    const { label } = this.props
    return (
      <div className="balance-form">
        <div className="balance-form-title">{label} Balance</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.amount}
            placeholder="Enter an amount"
            onChange={this.amountChange}
          />
          <select value={this.state.value} onChange={this.chooseCurrency}>
            {this.props.accountTypes.map(type => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          <button>{label}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accountTypes: state.account.accountTypes
  };
};

export default connect(
  mapStateToProps,
  actions
)(BalanceForm);
