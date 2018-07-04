import React from 'react';
import ReactDOM from 'react-dom';

import CryptoCcyList from './components/CryptoCcyList';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Provider store = {store}><CryptoCcyList/></Provider>, app);
}

initialise();