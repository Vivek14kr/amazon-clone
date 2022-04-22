import { createStore, combineReducers, applyMiddleware } from "redux";

import { basketReducer } from "./reducer";


import thunk from "redux-thunk"
const rootReducer = combineReducers({
  regState: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
