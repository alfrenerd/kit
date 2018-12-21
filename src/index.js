import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import './index.css';

import App from './App';
import configureStore from "./store/configureStore"

const store = configureStore();

const startApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(startApp, document.getElementById('root'));
