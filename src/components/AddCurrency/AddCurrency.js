import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class AddCurrency extends Component {
  state = {
    currency: "CAD"
  };

  selectCurrency = e => {
    this.setState({
      currency: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addCurrency(this.state.currency);
  };

  filterCurrencies = currency => {
    // const currencies = ["USD", "EUR", "CAD", "GBP", "AUD", "NZD", "HKD", "JPY"];

    // if (currencies.includes(currency)) {
      return (
        <option key={currency} value={currency}>
          {currency}
        </option>
      );
    // }
  };

  render() {
    const { exchangeRates } = this.props;
    return (
      <div>
        Add a currency account
        <form onSubmit={this.onSubmit}>
          <select name="select" value={this.state.currency} onChange={this.selectCurrency}>
            {Object.keys(exchangeRates).map(rate =>
              this.filterCurrencies(rate)
            )}
          </select>
          <button>Add Currency Account</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeRates: state.account.exchangeRates,
    accountBalances: state.account.accountBalances
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddCurrency);
