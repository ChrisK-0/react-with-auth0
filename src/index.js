import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Auth from "./Auth";

const auth = new Auth();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<App {...state} />, document.getElementById('root'));
}

// This makes it, so i dont have to add window. infront of location
/* eslint no-restricted-globals: 0*/
let username = auth.getProfile().given_name || "user";

let initialState = {
  name: username,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
}

window.setState(initialState);



serviceWorkerRegistration.register();