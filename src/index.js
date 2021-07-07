import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk" //middle ware for return action as function
import combineReducers from "./reducers/rootRd"
//creating a rdux store that hold global state of app, arguments : reducer, actions
const store = createStore(combineReducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

