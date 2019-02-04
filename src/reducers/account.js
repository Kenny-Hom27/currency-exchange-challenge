import { DEPOSIT_BALANCE, WITHDRAW_BALANCE } from "../actions/types";

const INITIAL_STATE = {
  defaultCurrency: "USD",
  accountTypes: ["USD", "EUR", "CAD", "GBP", "JPY", "HKD"],
  accountBalances: { USD: 0, EUR: 0, CAD: 0, GBP: 0, JPY: 0, HKD: 0 },
  exchangeRates: {},
  totalBalance: 0,
  transactionHistory: []
};

function depositBalance(accountBalances, deposit) {
  if (isNaN(deposit.amount) || !deposit.amount) return accountBalances;

  accountBalances[deposit.currencyType] += parseInt(deposit.amount);
  return accountBalances;
}

function withdrawBalance(accountBalances, deposit) {
  if (isNaN(deposit.amount) || !deposit.amount) return accountBalances;
  if (
    deposit.amount < 0 ||
    deposit.amount > accountBalances[deposit.currencyType]
  )
    return accountBalances;

  accountBalances[deposit.currencyType] -= parseInt(deposit.amount);
  return accountBalances;
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DEPOSIT_BALANCE:
      const depositedBalance = depositBalance(
        { ...state.accountBalances },
        action.payload
      );
      return { ...state, accountBalances: depositedBalance };
    case WITHDRAW_BALANCE:
      const withdrawnBalance = withdrawBalance(
        { ...state.accountBalances },
        action.payload
      );
      return { ...state, accountBalances: withdrawnBalance };
    default:
      return state;
  }
}
