import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AddCurrency from "../AddCurrency/AddCurrency";
import DepositBalance from "../ChangeBalance/DepositBalance";
import WithDrawBalance from "../ChangeBalance/WithdrawBalance";
import TransferBalance from "../TransferBalance/TransferBalance";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchRates(this.props.defaultCurrency);
    this.props.calculateBalance();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AddCurrency} />
          <Route exact path="/addCurrency" component={AddCurrency} />
          <Route exact path="/deposit" component={DepositBalance} />
          <Route exact path="/withdraw" component={WithDrawBalance} />
          <Route exact path="/transfer" component={TransferBalance} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultCurrency: state.account.defaultCurrency,
    exchangeRates: state.account.exchangeRates
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
