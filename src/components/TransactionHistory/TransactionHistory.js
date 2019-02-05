import React, { Component } from "react";
import { connect } from "react-redux";
import "./TransactionHistory.css";

class TransactionHistory extends Component {
  render() {
    const { transactionHistory } = this.props
    return (
      <div className="transaction-history">
        <div className="transaction-history-title">Transaction History</div>
        <div className="transaction-history-logs">
          {transactionHistory.map((trans, idx) => {
            return (
              <div key={idx} className="transaction-history-log">
                Transaction#{transactionHistory.length-idx}: {trans}
                <hr/>
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
    transactionHistory: state.account.transactionHistory
  };
};

export default connect(mapStateToProps)(TransactionHistory);
