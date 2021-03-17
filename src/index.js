import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

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

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();