import axios from "axios";
import {
  DEPOSIT_BALANCE,
  WITHDRAW_BALANCE,
  FETCH_RATES,
  CHANGE_DEFAULT_CURRENCY,
  ADD_CURRENCY,
  CALCULATE_BALANCE,
  TRANSFER_BALANCE
} from "./types";

export const depositBalance = values => async dispatch => {
  dispatch({
    type: DEPOSIT_BALANCE,
    payload: values
  });

  dispatch({
    type: CALCULATE_BALANCE,
  });
};

export const withdrawBalance = values => async dispatch => {
  dispatch({
    type: WITHDRAW_BALANCE,
    payload: values
  });
};

export const fetchRates = value => async dispatch => {
  const rates = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${value}`
  );

  dispatch({
    type: FETCH_RATES,
    payload: rates.data.rates
  });
};

export const changeDefaultCurrency = value => async dispatch => {
  dispatch({
    type: CHANGE_DEFAULT_CURRENCY,
    payload: value
  });
};

export const addCurrency = value => async dispatch => {
  dispatch({
    type: ADD_CURRENCY,
    payload: value
  });
};

export const calculateBalance = () => async dispatch => {
  dispatch({
    type: CALCULATE_BALANCE,
  });
};

export const transferBalance = (values) => async dispatch => {
  const rates = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${values.sendType}`
  );
  
  const exchangeRate = rates.data.rates[values.receiveType]

  dispatch({
    type: TRANSFER_BALANCE,
    payload: {...values, exchangeRate}
  });
};




