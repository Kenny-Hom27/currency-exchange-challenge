import React, { Component } from 'react';
import { connect } from "react-redux";

class TransactionHistory extends Component {
  render() {
    return (
      <div>
      <div>Transaction History</div>
        {this.props.transactionHistory.map((trans, idx) => {
          return <div key={idx}>{trans}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactionHistory: state.account.transactionHistory,
  };
};

export default connect(
  mapStateToProps,
)(TransactionHistory);
