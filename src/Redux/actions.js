
import { auth } from "../utils/firebase";
import {REGISTER_SUCCESS, REGISTER_START,ADD_TO_BASKET, PRODUCTS, REMOVE_FROM_BASKET, REGISTER_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL, SET_USER, SET_BASKET_EMPTY } from "./actionTypes";

export const addToBasket = (item) => {
 return  {
  type: ADD_TO_BASKET,
  payload: item,
}};

export const addProduct = (item) =>{
  return {
  type: PRODUCTS,
  payload:item,
}
};

export const removeFromBasket = (id) => {
  return {
  type: REMOVE_FROM_BASKET,
  payload: id,
}}

const registerStart = () => 
{return {
  type: REGISTER_START
}}

const registerSuccess = (user) => {
  return {
  type: REGISTER_SUCCESS,
  payload: user,
}}

const registerError = (error) => {
  return {
  type: REGISTER_FAIL,
  payload: error,
}};

const loginStart = () => {
  return {
  type: LOGIN_START,
}}

const loginSuccess = (user) => {
  return {
  type: LOGIN_SUCCESS,
  payload: user,
}}

const loginError = (error) => {
  return {
  type: LOGIN_FAIL,
  payload: error,
}}

const logoutStart = () => {
  return {
  type: LOGOUT_START
}}

const logoutSuccess = () => {
  return {
  type: LOGOUT_SUCCESS
}}

const logoutError = (error) => {
  return {
  type: LOGOUT_FAIL,
  payload: error,
}}

export const setuser = (user) => {
  return {
  type: SET_USER,
  payload: user,
}}

export const setBasketEmpty = () => {
  return {
  type: SET_BASKET_EMPTY
}}

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.message)));
  };
};

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
