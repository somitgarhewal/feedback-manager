import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Reducer from '../src/redux/reducers/reducer'
import thunkMiddleware from 'redux-thunk'
import { getAllUser } from '../src/redux/actions/adminActions' 

export const store = createStore(Reducer,applyMiddleware(thunkMiddleware));
store.dispatch(getAllUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
