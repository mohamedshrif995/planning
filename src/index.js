import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {getFirebase,reactReduxFirebase } from 'react-redux-firebase'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootReducer from './store/reducers/RootReducer'
import fbconfig from '../src/config/fbconfig'

const store=createStore(RootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig)
    )
    )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
