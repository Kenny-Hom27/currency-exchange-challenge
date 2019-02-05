import {
  DEPOSIT_BALANCE,
  WITHDRAW_BALANCE,
  ADD_CURRENCY,
  FETCH_RATES,
  CHANGE_DEFAULT_CURRENCY,
  CALCULATE_BALANCE,
  TRANSFER_BALANCE
} from "../actions/types";

const INITIAL_STATE = {
  defaultCurrency: "USD",
  exchangeRates: {},
  accountBalances: { USD: 0, EUR: 0 },
  totalBalance: 0,
  transactionHistory: []
};

// Functions to handle the input change

function depositBalance(accountBalances, deposit) {
  if (isNaN(deposit.amount) || !deposit.amount) return accountBalances;

  accountBalances[deposit.currencyType] += parseFloat(deposit.amount);
  return accountBalances;
}

function withdrawBalance(accountBalances, deposit) {
  if (isNaN(deposit.amount) || !deposit.amount) return accountBalances;
  if (
    deposit.amount < 0 ||
    deposit.amount > accountBalances[deposit.currencyType]
  )
    return accountBalances;

  accountBalances[deposit.currencyType] -= parseFloat(deposit.amount);
  return accountBalances;
}

function updateAccountTypes(accountBalances, currencyType) {
  if (accountBalances[currencyType]) {
    return accountBalances;
  } else {
    accountBalances[currencyType] = 0;
  }
  return accountBalances;
}

function calculateBalance(accountBalances, rates) {
  let totalBalance = 0;
  Object.keys(accountBalances).forEach(currency => {
    let myCurrency = parseFloat(accountBalances[currency]);
    let rate = parseFloat(rates[currency]) || 1;

    totalBalance += myCurrency * rate;
  });
  return totalBalance.toFixed(2);
}

function transferBalance(accountBalances, transferDetails) {
  const { sendAmount, sendType, receiveType, exchangeRate } = transferDetails;
  if (sendAmount > accountBalances[sendType] || !sendAmount) return accountBalances;

  accountBalances[sendType] -= parseFloat(sendAmount);

  accountBalances[receiveType] += parseFloat(
    (sendAmount * exchangeRate).toFixed(2)
  );
  console.log(accountBalances);
  return accountBalances;
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DEPOSIT_BALANCE:
      const depositedBalance = depositBalance(
        { ...state.accountBalances },
        action.payload
      );
      return {
        ...state,
        accountBalances: depositedBalance
      };
    case WITHDRAW_BALANCE:
      const withdrawnBalance = withdrawBalance(
        { ...state.accountBalances },
        action.payload
      );
      return {
        ...state,
        accountBalances: withdrawnBalance
      };
    case ADD_CURRENCY:
      const updatedAccountBalances = updateAccountTypes(
        { ...state.accountBalances },
        action.payload
      );
      return {
        ...state,
        accountBalances: updatedAccountBalances
      };
    case FETCH_RATES:
      return {
        ...state,
        exchangeRates: action.payload
      };
    case CHANGE_DEFAULT_CURRENCY:
      return {
        ...state,
        defaultCurrency: action.payload
      };
    case CALCULATE_BALANCE:
      const totalBalance = calculateBalance(
        state.accountBalances,
        state.exchangeRates
      );
      return {
        ...state,
        totalBalance: totalBalance
      };
    case TRANSFER_BALANCE:
      const transferredBalance = transferBalance(
        state.accountBalances,
        action.payload
      );

      return {
        ...state,
        accountBalances: {...transferredBalance},
      };
    default:
      return state;
  }
}
