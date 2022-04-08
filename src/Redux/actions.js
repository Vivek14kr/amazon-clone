import { REGISTER_FAV } from "./actionTypes";

export const RegFav = (message) => {
  return {
    type: REGISTER_FAV,

    payload: message,
  };
};

export const RemoveFav = (message) => {
  return {
    type: REGISTER_FAV,

    payload: message,
  };
};
