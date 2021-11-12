import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {ToastContainer} from "react-toastify";
import reducers from './store/reducers';
import 'react-toastify/dist/ReactToastify.css'
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <ToastContainer/>
            <App/>
    </Provider>
    , document.getElementById('root')
);

