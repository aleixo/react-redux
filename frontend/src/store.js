import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as apiReducer } from "./api";

const reducers = combineReducers({ apiReducer });

const store = createStore(
  reducers,
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(thunk)
);

export default store;
