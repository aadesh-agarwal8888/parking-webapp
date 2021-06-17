import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Error from './Error';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import About from './About';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Slotstatus from './Slotstatus';
import MoreDeets from './Slotstatus';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slotmanipulate from './Slotmanipulate';

ReactDOM.render(
<BrowserRouter>
  <Dashboard/>
</BrowserRouter>  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

