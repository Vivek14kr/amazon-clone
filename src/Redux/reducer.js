import { REGISTER_FAV, REMOVE_FAV } from "./actionTypes";

const init = {
  datas: [],
};

export const regFav = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_FAV:
      return {
        datas: [...state.datas, payload],
      };

    case REMOVE_FAV:
      return {
        datas: payload,
      };
    default:
      return state;
  }
};
