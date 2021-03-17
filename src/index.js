import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8CO0Nu14yloCRUTMbwBqTP25xFqos6vQ",
    authDomain: "web-messenger-80be7.firebaseapp.com",
    projectId: "web-messenger-80be7",
    storageBucket: "web-messenger-80be7.appspot.com",
    messagingSenderId: "1024095015994",
    appId: "1:1024095015994:web:0497cd4f83d69f278e9103",
    measurementId: "G-R0SKJNK9WX"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render( <
    Provider store = { store } >
    <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode> < /
    Provider > ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();