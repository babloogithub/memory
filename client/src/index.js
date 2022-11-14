import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import reducers from './reducers/index.js';

import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

console.log("in index.js");
// console.log(store.getState());
// console.log(state);

ReactDom.render(
      <Provider store={store}>
            <App />
      </Provider>,document.getElementById('root'));

//The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.