import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class IndividualBalance extends Component {
  makeDefault = async () => {
    await this.props.changeDefaultCurrency(this.props.currency);
    await this.props.fetchRates(this.props.currency);
    this.props.calculateBalance();
  };

  render() {
    const { currency, amount, defaultCurrency } = this.props;
    let isDefault = defaultCurrency === currency;

    return (
      <div className="individual-balance">
        <div
          className={
            isDefault ? "account-balance default-currency" : "account-balance"
          }
          onClick={this.makeDefault}
        >
          <div className="">{`${currency}: ${amount}`}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultCurrency: state.account.defaultCurrency
  };
};

export default connect(
  mapStateToProps,
  actions
)(IndividualBalance);
