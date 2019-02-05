import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Layout from "../Layout/Layout";
import "./AddCurrency.css";

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

  render() {
    const { exchangeRates } = this.props;
    return (
      <Layout>
        <div className="add-currency">
          <div className="add-currency-title">Add a currency account</div>
          <form onSubmit={this.onSubmit} className="form-group">
            <select
              name="select"
              value={this.state.currency}
              onChange={this.selectCurrency}
              className="form-control col-md-2"
            >
              {Object.keys(exchangeRates).map(currency => (
                <option
                  key={currency}
                  value={currency}
                  className="form-control"
                >
                  {currency}
                </option>
              ))}
            </select>
            <button className="btn btn-primary">Add Currency Account</button>
          </form>
        </div>
      </Layout>
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
