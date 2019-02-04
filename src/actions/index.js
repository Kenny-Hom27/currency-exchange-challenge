 import { DEPOSIT_BALANCE, WITHDRAW_BALANCE } from './types';

 export const depositBalance = values => async dispatch => {
   dispatch({
     type: DEPOSIT_BALANCE,
     payload: values
   })
 }

 export const withdrawBalance = values => async dispatch => {
   dispatch({
     type: WITHDRAW_BALANCE,
     payload: values
   })
 }